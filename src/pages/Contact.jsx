import React from "react";
import { useContactForm } from "../hooks/useContactForm";
import ContactLayout from "../components/contact/ContactLayout";
import SuccessScreen from "../components/contact/SuccessScreen";
import DraftModal from "../components/contact/DraftModal";

const Contact = () => {
  const {
    formik,
    currentStep,
    totalSteps,
    isSubmitting,
    isSubmitted,
    autoSaveStatus,
    showDraftModal,
    handleRestoreDraft,
    handleDiscardDraft,
    goToStep,
    handlePrev,
    handleNext,
  } = useContactForm();

  if (isSubmitted) {
    return <SuccessScreen />;
  }

  return (
    <>
      <DraftModal
        isOpen={showDraftModal}
        onRestore={handleRestoreDraft}
        onDiscard={handleDiscardDraft}
      />
      <ContactLayout
        formik={formik}
        currentStep={currentStep}
        totalSteps={totalSteps}
        isSubmitting={isSubmitting}
        autoSaveStatus={autoSaveStatus}
        goToStep={goToStep}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
};

export default Contact;
