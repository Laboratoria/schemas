const mongoose = require('mongoose/browser');
const {
  UserSchema,
  AcademicProfileSchema,
  AcademicProfileTagSchema,
  AcademicProfileEndorsementSchema,
  AcademicProfileCommentSchema,
} = require('../../')(mongoose);

describe('AcademicProfileSchema', () => {
  it('should fail validation when fields missing', () => {
    const doc = new mongoose.Document({}, AcademicProfileSchema);
    expect(doc.validateSync().errors).toMatchSnapshot();
  });

  it('should validate example', () => {
    const user = new mongoose.Document({}, UserSchema);
    const tag = new mongoose.Document({}, AcademicProfileTagSchema);
    const endorsement = new mongoose.Document({}, AcademicProfileEndorsementSchema);
    const comment = new mongoose.Document({}, AcademicProfileCommentSchema);

    const doc = new mongoose.Document({
      user: user._id,
      createdAt: new Date(),
      tags: [tag._id],
      endorsements: [endorsement._id],
      comments: [comment._id],
    }, AcademicProfileSchema);

    return doc.validate();
  });
});
