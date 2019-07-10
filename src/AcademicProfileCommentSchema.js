
//
// # AcademicProfileCommentSchema
//

module.exports = (conn) => {
  const AcademicProfileCommentSchema = new conn.Schema({
    academicProfile: {
      type: conn.Schema.Types.ObjectId,
      ref: 'AcademicProfile',
      required: true,
    },
    createdBy: {
      type: conn.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    project: { // Project por confirmar y cohorts caso de uso si repite el project
      type: conn.Schema.Types.ObjectId,
      ref: 'Project',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    type: {
      type: String,
      required: true,
      enum: [
        'tech',
        'soft',
      ],
    },
    text: {
      type: String,
      trim: true,
    },
  }, { collection: 'academic_profile_comments' });

  return AcademicProfileCommentSchema;
};
