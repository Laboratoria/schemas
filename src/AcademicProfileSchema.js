// TODO: Validar que las tags, endorments y comentarios que los
// coaches, TMs y cualquier otra persona que tenga contacto con las estudiantes
// mientras esten desarrollando un proyecto.


module.exports = (conn) => {
  const AcademicProfileSchema = new conn.Schema({
    user: {
      type: conn.Schema.Types.ObjectId,
      ref: ' User',
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    tags: {
      type: [conn.Schema.Types.ObjectId],
      ref: 'AcademicProfileTag',
      required: true,
    },
    endorsements: {
      type: [conn.Schema.Types.ObjectId],
      ref: 'AcademicProfileEndorsement',
      required: true,
    },
    comments: {
      type: [conn.Schema.Types.ObjectId],
      ref: 'AcademicProfileComment',
      required: true,
    },
  });

  AcademicProfileSchema.index({ user: 1 }, { unique: true });

  return AcademicProfileSchema;
};
