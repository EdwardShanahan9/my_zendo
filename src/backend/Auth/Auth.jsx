import { account } from "../appwrite";

export const signUp = async (email, password, name) => {
  try {
    const response = await account.create("unique()", email, password, name);
    return response;
  } catch (error) {
    throw new Error(error.message || "Failed to sign up");
  }
};
