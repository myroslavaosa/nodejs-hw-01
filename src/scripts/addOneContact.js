import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
  try {
    const oldContacts = await readContacts();
    const newContact = createFakeContact();

    const updatedContacts = [...oldContacts, newContact];

    await writeContacts(updatedContacts);
    console.log("✅ Contact added successfully");
  } catch (error) {
    console.error("❌ Error adding contact:", error);
  }
};

addOneContact();
