import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const generateContacts = async (number) => {
  try {
    const oldContacts = await readContacts();

    const newContacts = Array.from({ length: number }, () => createFakeContact());

    const updatedContacts = [...oldContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`✅ Successfully generated ${number} new contacts.`);
  } catch (error) {
    console.error("❌ Failed to generate contacts:", error);
  }
};

generateContacts(5);
