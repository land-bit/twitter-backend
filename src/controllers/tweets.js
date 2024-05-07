import data from "../data.js";

const { "current-user": current, tweets } = data;

export const getTweets = (req, res, next) => {
  try {
    if (!tweets) throw new Error("Tweets not available");
    res.status(200).json(tweets.reverse());
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

export const postTweets = (req, res, next) => {
  try {
    if (!req.body.text) throw new Error("Tweets not available");
    const newTweet = {
      id: Math.round(Math.random() * 100000).toString(),
      user: current,
      content: req.body,
      actions: {
        comments: "0",
        retweet: "0",
        like: "0",
        state: false,
      },
    };
    tweets.push(newTweet);
    res.status(201).json(tweets.reverse());
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};
