import { removeElementById } from "./removeElement";

export const addStyle = (id, css) => {
  // remove before adding
  removeElementById(id);

  const style = document.createElement("style");
  style.id = id;
  style.class = "ECI";
  style.textContent = css;

  if (document.head) {
    document.head.appendChild(style);
    return;
  }
  document.documentElement.appendChild(style);
};
