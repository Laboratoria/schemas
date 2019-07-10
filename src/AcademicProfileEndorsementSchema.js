//
// # AcademicProfileEndorsementSchema
//

module.exports = (conn) => {
  const AcademicProfileEndorsementSchema = new conn.Schema({
    academicProfile: {
      type: conn.Schema.Types.ObjectId,
      ref: 'AcademicProfile',
      required: true,
      index: true,
    },
    createdBy: {
      type: conn.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    endorsement: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Endorsment',
      required: true,
    },
    reason: { // Por confirmar si va
      type: String,
      trim: true,
    },
  }, { collection: 'academic_profile_endorsements' });


  return AcademicProfileEndorsementSchema;
};
