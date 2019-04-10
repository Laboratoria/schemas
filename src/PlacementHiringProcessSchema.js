module.exports = (conn) => {
  const PlacementHiringProcessSchema = new conn.Schema({
    status: {
      type: Boolean,
      required: true,
    },
    createDate: {
      type: Date,
      required: true,
    },
    organization: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true,
    },
    jobOpportunity: {
      type: conn.Schema.Types.ObjectId,
      ref: 'JobOpportunity',
      required: true,
    },
    graduateProfileSchema: {
      type: conn.Schema.Types.ObjectId,
      ref: 'GraduateProfile',
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
    madeOffer: {
      type: Boolean,
    },
    acceptedOffer: {
      type: Boolean,
    },
    salary: {
      type: Number,
    },
  });
  return PlacementHiringProcessSchema;
};
