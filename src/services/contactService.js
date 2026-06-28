export const submitContactForm = async (formData) => {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  const payload = {
    ...formData,
    submittedAt: new Date().toISOString(),
    userAgent: navigator.userAgent,
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
