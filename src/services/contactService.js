import { getRecaptchaToken } from "../utils/loadRecaptcha";

const getClientIp = async () => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data.ip;
  } catch {
    return "unknown";
  }
};

export const submitContactForm = async (formData) => {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
  const recaptchaToken = await getRecaptchaToken("contact_form");
  const clientIp = await getClientIp();

  const payload = {
    ...formData,
    recaptchaToken,
    clientIp,
    submittedAt: new Date().toISOString(),
  };

  // Mock mode
  if (!endpoint) {
    console.warn(
      "[Contact Service] Missing VITE_CONTACT_ENDPOINT. Mock mode active:",
      payload,
    );

    await new Promise((resolve) => setTimeout(resolve, 1200));

    return { success: true, mock: true };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        // "Content-Type": "application/json", TIRABA ERROR DE CORS
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return { success: true, data };
  } catch (error) {
    console.error("[Contact Service] Error submitting form:", error);
    throw error;
  }
};
