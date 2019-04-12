module.exports = (conn) => {
  const HiringProcessSchema = new conn.Schema({
    status: {
      type: Boolean,
      required: true,
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
    organization: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true,
    },
    opportunity: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Opportunity',
      required: true,
    },
    graduateProfileSchema: {
      type: conn.Schema.Types.ObjectId,
      ref: 'GraduateProfile',
      required: true,
    },
  });
  return HiringProcessSchema;
};
