import { useState, useEffect, useCallback } from "react";
import { useFormik } from "formik";
import { initialValues, stepValidationSchemas } from "../schemas/contactSchema";
import {
  saveFormDraft,
  loadFormDraft,
  clearFormDraft,
} from "../utils/localStorage";
import { submitContactForm } from "../services/contactService";
import { useToast } from "./useToast.js";

export const TOTAL_STEPS = 7;

export const useContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDraftModal, setShowDraftModal] = useState(false);
  const [savedDraft, setSavedDraft] = useState(null);
  const [autoSaveStatus, setAutoSaveStatus] = useState("Guardado ✓");
  const { showToast } = useToast();

  const formik = useFormik({
    initialValues,
    validationSchema: stepValidationSchemas[currentStep - 1],
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values) => {
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setIsSubmitting(true);
        try {
          await submitContactForm(values);
          clearFormDraft();
          setIsSubmitted(true);
          showToast({
            title: "Mensaje enviado",
            description: "Te respondemos en menos de 24hs",
            type: "success",
          });
        } catch (error) {
          showToast({
            title: "No pudimos enviar tu mensaje",
            description:
              "Revisá tu conexión e intentá nuevamente en unos segundos.",
            type: "error",
          });
        } finally {
          setIsSubmitting(false);
        }
      }
    },
  });

  // Check for saved draft on mount
  useEffect(() => {
    const draft = loadFormDraft();
    if (draft && Object.keys(draft).length > 0) {
      setSavedDraft(draft);
      setShowDraftModal(true);
    }
  }, []);

  // Auto-save form draft on formik values change
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setTimeout(() => {
      saveFormDraft(formik.values);
      setAutoSaveStatus("Guardado ✓");
    }, 800);

    return () => clearTimeout(timer);
  }, [formik.values, isSubmitted]);

  const handleRestoreDraft = useCallback(() => {
    if (savedDraft) {
      formik.setValues(savedDraft);
    }
    setShowDraftModal(false);
  }, [savedDraft, formik]);

  const handleDiscardDraft = useCallback(() => {
    clearFormDraft();
    setShowDraftModal(false);
  }, []);

  const goToStep = useCallback((stepNumber) => {
    if (stepNumber >= 1 && stepNumber <= TOTAL_STEPS) {
      setCurrentStep(stepNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentStep]);

  const handleNext = useCallback(async () => {
    const errors = await formik.validateForm();
    formik.setTouched(
      Object.keys(formik.values).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {}),
    );

    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    }
  }, [formik]);

  return {
    formik,
    currentStep,
    totalSteps: TOTAL_STEPS,
    isSubmitting,
    isSubmitted,
    autoSaveStatus,
    showDraftModal,
    handleRestoreDraft,
    handleDiscardDraft,
    goToStep,
    handlePrev,
    handleNext,
  };
};
