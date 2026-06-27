const DRAFT_KEY = "nn_studio_contact_draft_v1";

export const saveFormDraft = (data) => {
  try {
    const payload = {
      data,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(DRAFT_KEY, JSON.stringify(payload));
    return true;
  } catch (error) {
    console.error("Error saving contact draft:", error);
    return false;
  }
};

export const loadFormDraft = () => {
  try {
    const item = localStorage.getItem(DRAFT_KEY);
    if (!item) return null;
    const parsed = JSON.parse(item);
    return parsed?.data || null;
  } catch (error) {
    console.error("Error loading contact draft:", error);
    return null;
  }
};

export const clearFormDraft = () => {
  try {
    localStorage.removeItem(DRAFT_KEY);
    return true;
  } catch (error) {
    console.error("Error clearing contact draft:", error);
    return false;
  }
};
