const mongoose = require('mongoose/browser');
const { AcademicProfileTagSchema, UserSchema, TagSchema } = require('../../')(mongoose);

describe('AcademicProfileTagSchema', () => {
  it('should fail validation when fields missing', () => {
    const doc = new mongoose.Document({}, AcademicProfileTagSchema);
    expect(doc.validateSync().errors).toMatchSnapshot();
  });

  it('should validate example', () => {
    const academicProfileTag = new mongoose.Document({}, AcademicProfileTagSchema);
    const createBy = new mongoose.Document({}, UserSchema);
    const tag = new mongoose.Document({}, TagSchema);

    const academicProfileTagSchema = new mongoose.Document({
      academicProfileTag: academicProfileTag._id,
      createBy: createBy._id,
      tag: tag._id,
      reason: 'foo',
    }, AcademicProfileTagSchema);

    academicProfileTagSchema.validate();
  });
});
