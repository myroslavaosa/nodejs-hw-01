import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { removeAllContacts } from "./removeAllContacts.js";

export const removeLastContact = async () => {
  const list = await readContacts();

  if (list.length === 0) {
    console.log("List is empty. Nothing to remove.");
    return;
  }

    if (list.length === 1) {
        console.log("Only one contact found. Removing all contacts.");
        await removeAllContacts();
        return;
    }
    else {
        list.pop();
        await writeContacts(list);
        console.log("Last contact removed. Remaining contacts:", list.length);
    }
};

removeLastContact();
