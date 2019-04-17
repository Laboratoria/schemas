const CampusSchema = require('./src/CampusSchema');
const CohortMembershipSchema = require('./src/CohortMembershipSchema');
const CohortSchema = require('./src/CohortSchema');
const OrganizationSchema = require('./src/OrganizationSchema');
const ProjectSchema = require('./src/ProjectSchema');
const ProjectFeedbackSchema = require('./src/ProjectFeedbackSchema');
const ReviewerSurveySchema = require('./src/ReviewerSurveySchema');
const GraduateProfileEndorsementSchema = require('./src/GraduateProfileEndorsementSchema');
const GraduateProfileLifeSkillSchema = require('./src/GraduateProfileLifeSkillSchema');
const GraduateProfileProjectSchema = require('./src/GraduateProfileProjectSchema');
const GraduateProfileSchema = require('./src/GraduateProfileSchema');
const HiringProcessSchema = require('./src/HiringProcessSchema');
const OpportunitySchema = require('./src/OpportunitySchema');
const EmployerSchema = require('./src/EmployerSchema');
const TopicSchema = require('./src/TopicSchema');
const UserSchema = require('./src/UserSchema');


module.exports = conn => ({
  CampusSchema: CampusSchema(conn),
  CohortMembershipSchema: CohortMembershipSchema(conn),
  CohortSchema: CohortSchema(conn),
  OrganizationSchema: OrganizationSchema(conn),
  ProjectSchema: ProjectSchema(conn),
  ProjectFeedbackSchema: ProjectFeedbackSchema(conn),
  ReviewerSurveySchema: ReviewerSurveySchema(conn),
  GraduateProfileEndorsementSchema: GraduateProfileEndorsementSchema(conn),
  GraduateProfileLifeSkillSchema: GraduateProfileLifeSkillSchema(conn),
  GraduateProfileProjectSchema: GraduateProfileProjectSchema(conn),
  GraduateProfileSchema: GraduateProfileSchema(conn),
  HiringProcessSchema: HiringProcessSchema(conn),
  OpportunitySchema: OpportunitySchema(conn),
  EmployerSchema: EmployerSchema(conn),
  TopicSchema: TopicSchema(conn),
  UserSchema: UserSchema(conn),
});
