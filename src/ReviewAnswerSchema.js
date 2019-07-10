//
// # ReviewAnswerSchema
//

module.exports = (conn) => {
  const ReviewAnswerSchema = new conn.Schema({
    question: {
      type: conn.Schema.Types.ObjectId,
      ref: 'ReviewQuestion',
      required: true,
      index: true,
    },
    projectFeedback: {
      type: conn.Schema.Types.ObjectId,
      ref: 'ProjectFeedback',
      required: true,
      index: true,
    },
    value: {
      type: String,
      trim: true,
    },
  }, { collection: 'review_answers' });

  return ReviewAnswerSchema;
};
