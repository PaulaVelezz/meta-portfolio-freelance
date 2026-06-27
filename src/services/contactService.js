export const submitContactForm = async (formData) => {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  const payload = {
    ...formData,
    submittedAt: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };

  // If no endpoint is configured, simulate network request with mock success
  if (!endpoint) {
    console.warn(
      "[N/N Contact Service] VITE_CONTACT_ENDPOINT variable is not defined. Simulating submission payload:",
      payload
    );
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { success: true, mock: true };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8", // Google Apps Script friendly
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("[N/N Contact Service] Error submitting form:", error);
    // Even on CORS or GAS redirect warnings, attempt fallback handling if needed
    throw error;
  }
};
