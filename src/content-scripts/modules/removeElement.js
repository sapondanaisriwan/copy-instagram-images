export const removeElementById = (id) => {
  const element = document.getElementById(id);
  element && element.remove();
};
