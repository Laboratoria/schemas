// Tags

module.exports = (conn) => {
  const TagSchema = new conn.Schema({
    texto: {
      type: String,
      required: true,
    },
  });

  return TagSchema;
};
