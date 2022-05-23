import Snoowrap from 'snoowrap';

const r = new Snoowrap({
  userAgent: 'some-description',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS,
});

export const displaySub = async (subName) => {
  return await r
    .getSubreddit(subName)
    .getTop({time: 'day', limit: 5})
    .then((posts) => {
      const subData: Array<string> = [];
      posts.forEach((post) => {
        subData.push(`${post.title}`);
      });
      return subData;
    });
};
