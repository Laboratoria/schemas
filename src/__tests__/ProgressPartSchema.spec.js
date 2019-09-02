const mongoose = require('mongoose/browser');
const {
  ProgressPartSchema, TopicUnitPartSchema,
} = require('../..')(mongoose);

describe('ProgressPartSchema', () => {
  it('should fail validation when fields missing', () => {
    const doc = new mongoose.Document({}, ProgressPartSchema);
    return doc.validate()
      .catch(err => expect(err.errors).toMatchSnapshot());
  });

  it('should pass at least with unit field', () => {
    const topicUnitPart = new mongoose.Document({}, TopicUnitPartSchema);
    const doc = new mongoose.Document({
      part: topicUnitPart._id,
    }, ProgressPartSchema);

    return doc.validate();
  });

  it('should pass with all fields', () => {
    const topicUnitPart = new mongoose.Document({}, TopicUnitPartSchema);
    const doc = new mongoose.Document({
      part: topicUnitPart._id,
      openedAt: Date.now(),
      completedAt: Date.now(),
      latestActivity: true,
    }, ProgressPartSchema);

    return doc.validate();
  });
});
