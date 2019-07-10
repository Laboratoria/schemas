const mongoose = require('mongoose/browser');
const {
  AcademicProfileEndorsementSchema,
  UserSchema,
  AcademicProfileSchema,
  EndorsmentSchema,
} = require('../../')(mongoose);

describe('AcademicProfileEndorsmentSchema', () => {
  it('should fail validation when fields missing', () => {
    const doc = new mongoose.Document({}, AcademicProfileEndorsementSchema);
    expect(doc.validateSync().errors).toMatchSnapshot();
  });

  it('should validate example', () => {
    const academicProfile = new mongoose.Document({}, AcademicProfileSchema);
    const endorsement = new mongoose.Document({}, EndorsmentSchema);
    const createBy = new mongoose.Document({}, UserSchema);

    const doc = new mongoose.Document({
      academicProfile: academicProfile._id,
      createBy: createBy._id,
      endorsement: endorsement._id,
      reason: 'foo',
    }, AcademicProfileEndorsementSchema);

    doc.validate();
  });
});
