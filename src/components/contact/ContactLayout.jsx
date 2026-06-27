import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";
import StepContact from "./StepContact";
import StepServices from "./StepServices";
import StepBranding from "./StepBranding";
import StepBusiness from "./StepBusiness";
import StepGoals from "./StepGoals";
import StepCompetition from "./StepCompetition";
import StepReview from "./StepReview";

const stepComponents = {
  1: StepContact,
  2: StepServices,
  3: StepBranding,
  4: StepBusiness,
  5: StepGoals,
  6: StepCompetition,
  7: StepReview,
};

const ContactLayout = ({
  formik,
  currentStep,
  totalSteps,
  isSubmitting,
  autoSaveStatus,
  goToStep,
  onPrev,
  onNext,
}) => {
  const ActiveStepComponent = stepComponents[currentStep];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column (Sticky Sidebar) */}
        <Sidebar currentStep={currentStep} onStepClick={goToStep} />

        {/* Right Column (Step Content & Navigation) */}
        <main className="flex-1 w-full min-w-0 bg-surface/40 rounded-3xl border border-border/70 p-6 sm:p-8 lg:p-10 shadow-elevated backdrop-blur-sm">
          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
            autoSaveStatus={autoSaveStatus}
          />

          <div className="py-6 min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <ActiveStepComponent formik={formik} onEditStep={goToStep} />
              </motion.div>
            </AnimatePresence>
          </div>

          <NavigationButtons
            currentStep={currentStep}
            totalSteps={totalSteps}
            onPrev={onPrev}
            onNext={onNext}
            isSubmitting={isSubmitting}
          />
        </main>
      </div>
    </div>
  );
};

export default ContactLayout;
