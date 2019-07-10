// ReviewerSurveySchema

module.exports = (conn) => {
  const ReviewerSurveySchema = new conn.Schema({
    questions: {
      type: [conn.Schema.Types.ObjectId],
      ref: 'ReviewQuestion',
      required: true,
    },
    version: { // Preguntar si va ha  ver versiones
      type: String,
      required: true,
    },
  }, { collection: 'reviewer_surveys' });

  return ReviewerSurveySchema;
};
