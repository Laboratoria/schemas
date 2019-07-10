const mongoose = require('mongoose/browser');
const { ReviewQuestionSchema } = require('../../')(mongoose);

describe('ReviewQuestionSchema', () => {
  it('should fail validation when fields missing', () => {
    const doc = new mongoose.Document({}, ReviewQuestionSchema);
    expect(doc.validateSync().errors).toMatchSnapshot();
  });

  it('should fail validation when multiple-choice question is missing options', (done) => {
    const doc = new mongoose.Document({
      id: 'foo',
      text: 'bar',
      type: 'multiple-choice',
      visibility: 'private',
    }, ReviewQuestionSchema);

    doc.validate((err) => {
      expect(err.message).toBe('Options is required when type is multiple-choice');
      done();
    });
  });

  it('should fail validation when question is missing id', () => {
    const doc = new mongoose.Document({
      text: 'Hola',
      type: 'multiple-choice',
      options: ['1', '2'],
      visibility: 'private',
    }, ReviewQuestionSchema);

    return doc.validate()
      .catch(err => expect(err.message).toMatchSnapshot());
  });

  it('should fail validation when wrong type', () => {
    const doc = new mongoose.Document({
      id: 'bar',
      text: 'Hola',
      type: 'other',
      visibility: 'public',
    }, ReviewQuestionSchema);

    return doc.validate()
      .catch(err => expect(err.errors).toMatchSnapshot());
  });

  it('should fail validation when question options not a Array', () => {
    const doc = new mongoose.Document({
      id: 'bar',
      text: 'foo',
      type: 'multiple-choice',
      options: 3,
    }, ReviewQuestionSchema);

    return doc.validate()
      .catch(err => expect(err.errors).toMatchSnapshot());
  });

  it('should validate good review Open Question ', () => {
    const doc = new mongoose.Document({
      id: 'foo',
      text: 'foo',
      type: 'open',
      visibility: 'public',
    }, ReviewQuestionSchema);

    return doc.validate();
  });

  it('should validate good review Multiple-choice Question', () => {
    const doc = new mongoose.Document({
      id: 'bar',
      text: 'foo',
      type: 'multiple-choice',
      visibility: 'private',
      options: ['1', '2'],
    }, ReviewQuestionSchema);

    return doc.validate();
  });
});
