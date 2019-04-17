module.exports = (conn) => {
  const EmployerSchema = new conn.Schema({
    user: {
      type: conn.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
      unique: true,
    },
    organization: {
      type: conn.Schema.Types.ObjectId,
      ref: 'Organization',
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

  });
  return EmployerSchema;
};
