module.exports = (conn) => {
  /*
  * Stores user's job history in order to make statistics about
  * salaries and top companies hiring our students.
  */
  const userJobSchema = new conn.Schema({
    userId: String,
    employer: String,
    position: String,
    salary: Number,
    currency: {
      type: String,
      enum: ['CLP', 'PEN', 'MXN', 'BRL'],
    },
    start: Date,
    end: Date,
  });

  // Wildcard text index to match any string field in a user document
  userJobSchema.index({ '$**': 'text' });

  return userJobSchema;
};
