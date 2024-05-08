import { KeyEnableCopy } from "../data/storage-key";
import { getStorage } from "../utils/browserStorage";
import { addStyle } from "./modules/addStyle";
import { removeElementById } from "./modules/removeElement";

const main = async () => {
  const enableCopy = await getStorage(KeyEnableCopy);

  if (!enableCopy) {
    removeElementById(KeyEnableCopy);
    return;
  }

  addStyle(
    KeyEnableCopy,
    `
    ._aagw {
      display: none !important;
    }
    `
  );
};

main();

chrome.storage.onChanged.addListener(async () => {
  main();
});
