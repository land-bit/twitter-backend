import data from "../data.js";

const { tweets } = data;

export const getUsers = (req, res, next) => {
  try {
    if (!tweets) throw new Error("Tweets not available");
    const user = req.params.user;
    const tweet = tweets.filter((t) => t.user.userName === user);
    res.status(200).json({ userInfo: tweet[0].user, tweets: tweet });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
