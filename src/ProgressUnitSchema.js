const ProgressPartSchema = require('./ProgressPartSchema');

module.exports = (conn) => {
  const ProgressUnitSchema = new conn.Schema({
    unit: {
      type: conn.Schema.Types.ObjectId,
      ref: 'TopicUnit',
      required: true,
    },
    completedDuration: { type: Number, default: 0 },
    completedParts: { type: Number, default: 0 },

    // it indicates percentage of the unit that was completed
    percent: { type: Number, default: 0 },
    completedAt: { type: Date, default: null },

    // TODO: ask Lupo or Fabian about this key
    // selfAssessment structure on Firestore
    // { completed: 0, sentiment: 1, completedAt: xxx }
    selfAssessment: Map,
    parts: [ProgressPartSchema(conn)],
  }, { collection: 'progress_units' });

  return ProgressUnitSchema;
};
