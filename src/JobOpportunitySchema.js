module.exports = (conn) => {
  const JobOpportunitySchema = new conn.Schema({
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    vacancies: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Front-end Developer', 'Prototyper', 'UX Designer'],
    },
    hireType: {
      type: String,
      enum: ['payroll', 'independent'],
    },
    scheduleType: {
      type: String,
      enum: ['full-time', 'part-time'],
    },
    saleryRange: {
      type: String,
      required: true,
    },
    tentativeStart: {
      type: Date,
      require: true,
    },
    employer: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Employer',
      required: true,
    },
    organization: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true,
    },
    process: {
      type: conn.Schema.Types.ObjectId,
      ref: 'PlacementHiringProcess',
      required: true,
    },
  });
  return JobOpportunitySchema;
};
