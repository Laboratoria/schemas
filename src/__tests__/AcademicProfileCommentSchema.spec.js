const mongoose = require('mongoose/browser');
const {
  AcademicProfileCommentSchema,
  UserSchema,
  AcademicProfileSchema,
} = require('../../')(mongoose);

describe('AcademicProfileEndorsmentSchema', () => {
  it('should fail validation when fields missing', () => {
    const doc = new mongoose.Document({}, AcademicProfileCommentSchema);
    expect(doc.validateSync().errors).toMatchSnapshot();
  });

  it('should validate example', (done) => {
    const academicProfile = new mongoose.Document({}, AcademicProfileSchema);
    const createdBy = new mongoose.Document({}, UserSchema);

    const doc = new mongoose.Document({
      academicProfile: academicProfile._id,
      createdBy: createdBy._id,
      type: 'tech',
      text: 'foo',
    }, AcademicProfileCommentSchema);

    doc.validate((err) => {
      expect(err).toBe(null);
      done();
    });
  });
});
