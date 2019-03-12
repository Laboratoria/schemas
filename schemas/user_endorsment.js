module.exports = (conn) => {
  const userEndorsmentSchema = new conn.Schema({
    userId: {
      type: String,
      unique: false,
      index: true,
    },
    authorLinkedin: String,
    company: String,
    companyUrl: String,
    detail: String,
    from: String,
    targetUserId: {
      type: String,
      unique: false,
      index: true,
    },
    creatorId: String,
  });

  // Wildcard text index to match any string field in a user document
  userEndorsmentSchema.index({ '$**': 'text' });

  return userEndorsmentSchema;
};
