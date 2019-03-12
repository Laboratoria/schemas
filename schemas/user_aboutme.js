module.exports = (conn) => {
  /*
  * User 'about me' data, excluded from the main user collection due to string
  * lengths (it can cause performance issues once we have a big student data
  * base).
  */
  const userAboutMeSchema = new conn.Schema({
    userId: {
      type: String,
      unique: true,
      index: true,
    },
    summary: String,
    areaOfInterest: String,
    biggestAchievements: String,
    biggestChallenges: String,
    careerGoals: String,
    strengthsAndWeaknesses: String,
  });

  // Wildcard text index to match any string field in a user document
  userAboutMeSchema.index({ '$**': 'text' });

  return userAboutMeSchema;
};
