const mongoose = require('mongoose/browser');
const {
  CohortProjectSchema,
  CohortMembershipSchema,
  ProjectFeedbackSchema,
  UserSchema,
  ReviewAnswerSchema,
} = require('../../')(mongoose);

describe('ProjectFeedbackSchema', () => {
  it('should fail validation when fields missing', () => {
    const doc = new mongoose.Document({}, ProjectFeedbackSchema);
    expect(doc.validateSync().errors).toMatchSnapshot();
  });

  it('should validate example', (done) => {
    const cohortProject = new mongoose.Document({}, CohortProjectSchema);
    const cohortMembership = new mongoose.Document({}, CohortMembershipSchema);
    const createdBy = new mongoose.Document({}, UserSchema);
    const reviewAnswer = new mongoose.Document({}, ReviewAnswerSchema);

    const projectFeedback = new mongoose.Document({
      cohortProject: cohortProject._id,
      cohortMembership: cohortMembership._id,
      createdBy: createdBy._id,
      rubric: '2',
      rubricResults: {
        logic: 5,
        architecture: 3,
        communication: 4,
        github: 5,
      },
      reviewerSurveyResults: [
        reviewAnswer._id,
      ],
    }, ProjectFeedbackSchema);

    projectFeedback.validate((err) => {
      expect(err).toBe(null);
      done();
    });
  });
});
