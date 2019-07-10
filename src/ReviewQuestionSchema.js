//
// ReviewQuestionSchema

module.exports = (conn) => {
  const ReviewQuestionSchema = new conn.Schema({
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['open', 'multiple-choice'],
      required: true,
    },
    visibility: {
      type: String,
      enum: ['public', 'private'],
      required: true,
    },
    options: {
      type: [String],
    },
  }, { collection: 'review_questions' });

  ReviewQuestionSchema.pre('validate', function (next) {
    if (this.type === 'multiple-choice' && (!this.options || (this.options && this.options.length === 0))) {
      return next(new Error('Options is required when type is multiple-choice'));
    }
    return next();
  });

  return ReviewQuestionSchema;
};
