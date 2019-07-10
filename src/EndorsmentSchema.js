// Endorsments

module.exports = (conn) => {
  const EndorsmentSchema = new conn.Schema({
    texto: {
      type: String,
      required: true,
    },
  });

  return EndorsmentSchema;
};
