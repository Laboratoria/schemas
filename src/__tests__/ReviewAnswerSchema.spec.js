const mongoose = require('mongoose/browser');
const { ReviewAnswerSchema, ReviewQuestionSchema, ProjectFeedbackSchema } = require('../../')(mongoose);

describe('ReviewAnswerSchema', () => {
  it('should fail validation when fields missing', () => {
    const doc = new mongoose.Document({}, ReviewAnswerSchema);
    expect(doc.validateSync().errors).toMatchSnapshot();
  });

  it('should pass sync validation ...', () => {
    const question = new mongoose.Document({}, ReviewQuestionSchema);
    const projectFeedback = new mongoose.Document({}, ProjectFeedbackSchema);
    const doc = new mongoose.Document({
      question: question._id,
      projectFeedback: projectFeedback._id,
      value: 'Crack',
    }, ReviewAnswerSchema);
    expect(doc.validateSync()).toBe(undefined);
  });

  it('should pass validation when answer is missing value', () => {
    const question = new mongoose.Document({}, ReviewQuestionSchema);
    const projectFeedback = new mongoose.Document({}, ProjectFeedbackSchema);
    const doc = new mongoose.Document({
      question: question._id,
      projectFeedback: projectFeedback._id,
      value: 'Crack',
    }, ReviewAnswerSchema);

    return doc.validate();
  });
});
