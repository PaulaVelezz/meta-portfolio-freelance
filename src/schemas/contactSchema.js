import * as Yup from "yup";

export const initialValues = {
  // Honeypot — never filled by real users
  _trap: "",

  // Step 1 — Contact
  company: "",
  firstName: "",
  lastName: "",
  position: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  linkedin: "",
  website: "",
  instagram: "",

  // Step 2 — Services & Budget
  services: [],
  budget: "",
  timeline: "",

  // Step 3 — Branding
  businessDescription: "",
  existingLogoName: "",
  brandKit: "",
  desiredDomain: "",
  socialLinks: "",

  // Step 4 — Business
  offeredServices: "",
  businessModel: "",
  targetAudience: "",
  marketScope: "Nacional", // default option
  biggestChallenge: "",

  // Step 5 — Goals
  goals: [],
  successMetrics: "",
  vision12Months: "",

  // Step 6 — Competition
  competitors: [{ name: "", website: "", pros: "", cons: "" }],
  uniqueValues: ["", "", "", ""],

  // Step 7 — Review
  consent: false,
};

export const stepValidationSchemas = [
  // Step 1: Contact Information
  Yup.object().shape({
    _trap: Yup.string().max(0, "Bot detected."),
    company: Yup.string().trim().required("Ingresá el nombre de tu empresa"),
    firstName: Yup.string().trim().required("Ingresá tu nombre"),
    lastName: Yup.string().trim(),
    position: Yup.string().trim(),
    email: Yup.string()
      .trim()
      .email("Ingresá un email válido")
      .required("Ingresá tu correo electrónico"),
    phone: Yup.string().trim().required("Ingresá tu número de teléfono"),
    city: Yup.string().trim(),
    country: Yup.string().trim(),
    linkedin: Yup.string().trim(),
    website: Yup.string().trim(),
    instagram: Yup.string().trim(),
  }),

  // Step 2: Services & Budget
  Yup.object().shape({
    services: Yup.array().of(Yup.string()),
    budget: Yup.string(),
    timeline: Yup.string(),
  }),

  // Step 3: Branding
  Yup.object().shape({
    businessDescription: Yup.string()
      .trim()
      .required("Contanos brevemente sobre tu negocio"),
    existingLogoName: Yup.string().trim(),
    brandKit: Yup.string().trim(),
    desiredDomain: Yup.string().trim(),
    socialLinks: Yup.string().trim(),
  }),

  // Step 4: Business
  Yup.object().shape({
    offeredServices: Yup.string().trim(),
    businessModel: Yup.string().trim(),
    targetAudience: Yup.string()
      .trim()
      .required("Describí a tu público objetivo"),
    marketScope: Yup.string().trim(),
    biggestChallenge: Yup.string().trim(),
  }),

  // Step 5: Goals
  Yup.object().shape({
    goals: Yup.array().of(Yup.string()),
    successMetrics: Yup.string().trim(),
    vision12Months: Yup.string().trim(),
  }),

  // Step 6: Competition
  Yup.object().shape({
    competitors: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().trim(),
        website: Yup.string().trim(),
        pros: Yup.string().trim(),
        cons: Yup.string().trim(),
      }),
    ),
    uniqueValues: Yup.array().of(Yup.string().trim()),
  }),

  // Step 7: Review & Consent
  Yup.object().shape({
    consent: Yup.boolean().oneOf(
      [true],
      "Debés aceptar ser contactado para continuar",
    ),
  }),
];
