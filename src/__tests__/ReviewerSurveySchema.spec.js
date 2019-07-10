const mongoose = require('mongoose/browser');
const { ReviewerSurveySchema, ReviewQuestionSchema } = require('../../')(mongoose);

describe('ReviewerSurveySchema', () => {
  it('should fail validation when fields missing', () => {
    const question = new mongoose.Document({}, ReviewQuestionSchema);
    const doc = new mongoose.Document({
      question: question._id,
    }, ReviewerSurveySchema);
    expect(doc.validateSync().errors).toMatchSnapshot();
  });

  it('should pass sync validation ...', () => {
    const question = new mongoose.Document({}, ReviewQuestionSchema);
    const doc = new mongoose.Document({
      question: question._id,
      version: '2.0.0',
    }, ReviewerSurveySchema);
    expect(doc.validateSync()).toBe(undefined);
  });

  it('should validate good question', () => {
    const question = new mongoose.Document({}, ReviewQuestionSchema);
    const doc = new mongoose.Document({
      question: question._id,
      version: '2.0.0',
    }, ReviewerSurveySchema);

    return doc.validate();
  });
});
