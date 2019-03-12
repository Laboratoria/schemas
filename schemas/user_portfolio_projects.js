module.exports = (conn) => {
  const userPortfolioProjectSchema = new conn.Schema({
    userId: String,
    date: Date,
    demo: String,
    description: String,
    github: String,
    image: String,
    name: String,
    tags: [String],
    where: String,
  });

  // Wildcard text index to match any string field in a user document
  userPortfolioProjectSchema.index({ '$**': 'text' });

  return userPortfolioProjectSchema;
};
