import data from "../data.js";

const { tweets } = data;

export const getTweets = (req, res, next) => {
  try {
    if (!tweets) throw new Error("Tweets not available");
    res.status(200).json(tweets);
  } catch (error) {
    res.send({ error: error.message });
  }
};
