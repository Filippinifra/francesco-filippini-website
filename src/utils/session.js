export const checkNewSession = () => !sessionStorage.getItem("existingSession");

export const setExistingSession = () =>
  sessionStorage.setItem("existingSession", true);
