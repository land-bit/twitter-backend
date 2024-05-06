export const getTweets = (req, res, next) => {
  res.status(200).json({ message: "Tweets route : get tweets" });
};

export const getTweet = (req, res, next) => {
  res.status(200).json({ message: "Tweets route : get tweet" });
};

export const createTweets = (req, res, next) => {
  res.status(201).json({ message: "Tweets route : create tweets" });
};

export const createTweet = (req, res, next) => {
  res.status(201).json({ message: "Tweets route : create tweet" });
};

export const updateTweets = (req, res, next) => {
  res.send({ message: "Tweets route : create tweets" });
};

export const updateTweet = (req, res, next) => {
  res.send({ message: "Tweets route : create tweet" });
};

export const deleteTweets = (req, res, next) => {
  res.send({ message: "Tweets route : create tweets" });
};

export const deleteTweet = (req, res, next) => {
  res.send({ message: "Tweets route : create tweet" });
};
