// TODO: Validar que las llaves de `rubricResults` son _ids_
// válidos de _habilidades_ (skills) en la versión especificada de
// la _rúbrica_ y que las llaves de `reviewerSurveyResults` hacen
// referencia a preguntas válidas del `ReviewerSurvey` en cuestión.

module.exports = (conn) => {
  const ProjectFeedbackSchema = new conn.Schema({
    cohortProject: {
      type: conn.Schema.Types.ObjectId,
      ref: 'CohortProject',
      required: true,
    },
    cohortMembership: {
      type: conn.Schema.Types.ObjectId,
      ref: 'CohortMembership',
      required: true,
    },
    createdBy: {
      type: conn.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    rubric: {
      type: String,
      required: true,
    },
    rubricResults: {
      type: Map,
      of: Number,
      required: true,
    },
    reviewerSurveyResults: {
      type: [conn.Schema.Types.ObjectId],
      ref: 'ReviewAnswer',
      required: true,
    },
  });

  return ProjectFeedbackSchema;
};
