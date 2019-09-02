module.exports = (conn) => {
  const ProgressPartSchema = new conn.Schema({
    part: {
      type: conn.Schema.Types.ObjectId,
      ref: 'TopicUnitPart',
      required: true,
    },
    openedAt: { type: Date, default: Date.now },
    completedAt: { type: Date, default: null }, // it replaces "readAt"

    // should we take into account "latestActivity"?
    // I think it's used to mark the latest part tackled by user.
    // TODO: Ask Lupo about it
    latestActivity: { type: Boolean, default: true },
  }, { collection: 'progress_parts' });

  return ProgressPartSchema;
};
