
//
// # StudentProfileTagsSchema
//

module.exports = (conn) => {
  const AcademicProfileTagSchema = new conn.Schema({
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
    tag: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Tag',
      required: true,
    },
    reason: {
      type: String,
      trim: true,
    },
  }, { collection: 'student_profile_tags' });


  return AcademicProfileTagSchema;
};
