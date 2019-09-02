const mongoose = require('mongoose/browser');
const {
  ProgressUnitSchema, TopicUnitSchema,
} = require('../..')(mongoose);

describe('ProgressUnitSchema', () => {
  it('should fail validation when fields missing', () => {
    const doc = new mongoose.Document({}, ProgressUnitSchema);
    return doc.validate()
      .catch(err => expect(err.errors).toMatchSnapshot());
  });

  it('should pass at least with unit field', () => {
    const topicUnit = new mongoose.Document({}, TopicUnitSchema);
    const doc = new mongoose.Document({
      unit: topicUnit._id,
    }, ProgressUnitSchema);

    return doc.validate();
  });

  it('should pass with all fields', () => {
    const topicUnit = new mongoose.Document({}, TopicUnitSchema);
    const doc = new mongoose.Document({
      unit: topicUnit._id,
      completedDuration: 20,
      completedParts: 5,
      percent: 100,
      completedAt: Date.now(),
    }, ProgressUnitSchema);

    return doc.validate();
  });
});
