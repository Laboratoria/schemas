module.exports = (conn) => {
  const OpportunitySchema = new conn.Schema({
    employer: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Employer',
      required: true,
    },
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
    status: {
      type: Boolean,
      required: true,
    },
  });
  return OpportunitySchema;
};
