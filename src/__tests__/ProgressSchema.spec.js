const mongoose = require('mongoose/browser');
const {
  ProgressSchema, UserSchema, CohortTopicSchema,
} = require('../..')(mongoose);

describe('ProgressSchema', () => {
  it('should fail validation when fields missing', () => {
    const doc = new mongoose.Document({}, ProgressSchema);
    return doc.validate()
      .catch(err => expect(err.errors).toMatchSnapshot());
  });

  it('should pass at least with user and cohortTopic fields', () => {
    const user = new mongoose.Document({}, UserSchema);
    const cohortTopic = new mongoose.Document({}, CohortTopicSchema);
    const doc = new mongoose.Document({
      user: user._id,
      cohortTopic: cohortTopic._id,
    }, ProgressSchema);

    return doc.validate();
  });

  it('should pass with all fields', () => {
    const user = new mongoose.Document({}, UserSchema);
    const cohortTopic = new mongoose.Document({}, CohortTopicSchema);
    const doc = new mongoose.Document({
      user: user._id,
      cohortTopic: cohortTopic._id,
      completedDuration: 20,
      completedUnits: 5,
      percent: 20,
      completedAt: Date.now(),
    }, ProgressSchema);

    return doc.validate();
  });
});
