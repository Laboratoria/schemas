const ProgressUnitSchema = require('./ProgressUnitSchema');

module.exports = (conn) => {
  const ProgressSchema = new conn.Schema({
    cohortTopic: {
      type: conn.Schema.Types.ObjectId,
      ref: 'CohortTopic',
      required: true,
    },
    user: {
      type: conn.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    completedDuration: { type: Number, default: 0 }, // comes from Firestore
    completedUnits: { type: Number, default: 0 }, // comes from Firestore

    // To show percentage of course that was completed
    percent: { type: Number, default: 0 }, // comes from Firestore

    // to show when a topic was completed
    completedAt: { type: Date, default: null },
    units: [ProgressUnitSchema(conn)],
  }, { timestamps: true });

  return ProgressSchema;
};
