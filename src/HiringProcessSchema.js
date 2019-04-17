module.exports = (conn) => {
  const HiringProcessSchema = new conn.Schema({
    opportunity: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Opportunity',
      required: true,
      unique: true,
    },
    graduate: {
      type: conn.Schema.Types.ObjectId,
      ref: 'GraduateProfile',
      required: true,
      unique: true,
    },
    organization: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true,
      unique: true,
    },
    createDate: {
      type: Date,
      required: true,
    },
    acceptedDate: {
      type: Date,
    },
    createProposalDate: {
      type: Date,
    },
    startDate: {
      type: Date,
    },
    salary: {
      type: Number,
    },
    status: {
      type: Boolean,
      required: true,
    },
  });
  return HiringProcessSchema;
};
