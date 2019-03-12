const { locale } = require('./common');

module.exports = (conn) => {
  /*
  * User profile data, it concentrates everything about a students, including
  * github, linkedin accounts or employment data.
  */
  const userSchema = new conn.Schema({
    firebaseId: String,
    status: {
      type: String,
      enum: ['applicant', 'student', 'alumnae', 'expelled', 'laboratorian'],
    },
    email: String,
    avatar: String,
    github: String,
    githubToken: String,
    linkedin: String,
    locale,
    name: String,
    portfolio: String,
    headquarter: {
      type: String,
      enum: ['MEX', 'GDL', 'SCL', 'LIM', 'SAP'], // SaoPaulo => SAP
    },
    // Admin levels
    roles: [{ // Array of roles, one can be admin AND trainingManager, for example
      type: String,
      enum: ['student', 'admin', 'trainingManager', 'jobPlacement', 'coach', 'alumnaeManager', 'finances'],
    }],
    // Payment system data
    paymentStart: Date,
    // Employment data
    employmentProfile: {
      index: true,
      type: String,
      enum: ['Front-end Developer', 'Prototyper', 'UX Designer'],
    },
    currentJob: String, // Reference to UserJob collection
  });

  // Wildcard text index to match any string field in a user document
  userSchema.index({ '$**': 'text' });

  return userSchema;
};
