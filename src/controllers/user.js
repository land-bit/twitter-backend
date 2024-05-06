import data from "../data.js";

const currentUser = data["current-user"];

export const getUser = (req, res) => {
  try {
    if (!currentUser) throw new Error("No current user");
    res.status(200).json(currentUser);
  } catch (error) {
    res.status(400).Error(error.message);
  }
};
