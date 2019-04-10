module.exports = (conn) => {
  const EmployerSchema = new conn.Schema({
    user: {
      type: conn.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    position: {
      type: String,
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
  });
  return EmployerSchema;
};
