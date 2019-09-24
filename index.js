const CampusSchema = require('./src/CampusSchema');
const CohortMembershipSchema = require('./src/CohortMembershipSchema');
const CohortPlatziCourseSchema = require('./src/CohortPlatziCourseSchema');
const CohortProjectSchema = require('./src/CohortProjectSchema');
const CohortSchema = require('./src/CohortSchema');
const CohortTopicSchema = require('./src/CohortTopicSchema');
const CohortTopicSettingsSchema = require('./src/CohortTopicSettingsSchema');
const GraduateProfileEndorsementSchema = require('./src/GraduateProfileEndorsementSchema');
const GraduateProfileLifeSkillSchema = require('./src/GraduateProfileLifeSkillSchema');
const GraduateProfileProjectSchema = require('./src/GraduateProfileProjectSchema');
const GraduateProfileSchema = require('./src/GraduateProfileSchema');
const OrganizationSchema = require('./src/OrganizationSchema');
const ProjectFeedbackSchema = require('./src/ProjectFeedbackSchema');
const ProjectSchema = require('./src/ProjectSchema');
const ReviewerSurveySchema = require('./src/ReviewerSurveySchema');
const ReviewQuestionSchema = require('./src/ReviewQuestionSchema');
const TagSchema = require('./src/TagSchema');
const EndorsementSchema = require('./src/EndorsementSchema');
const HiringProcessSchema = require('./src/HiringProcessSchema');
const JobOpportunitySchema = require('./src/JobOpportunitySchema');
const OrganizationMembershipSchema = require('./src/OrganizationMembershipSchema');
const TopicSchema = require('./src/TopicSchema');
const TopicUnitSchema = require('./src/TopicUnitSchema');
const TopicUnitPartSchema = require('./src/TopicUnitPartSchema');
const UserSchema = require('./src/UserSchema');
const UserActivityFeedEventSchemas = require('./src/UserActivityFeedEventSchemas');
const ProgressSchema = require('./src/ProgressSchema');
const ProgressUnitSchema = require('./src/ProgressUnitSchema');
const ProgressPartSchema = require('./src/ProgressPartSchema');


module.exports = (conn, document) => ({
  CampusSchema: CampusSchema(conn),
  CohortMembershipSchema: CohortMembershipSchema(conn),
  CohortPlatziCourseSchema: CohortPlatziCourseSchema(conn),
  CohortProjectSchema: CohortProjectSchema(conn),
  CohortSchema: CohortSchema(conn),
  CohortTopicSchema: CohortTopicSchema(conn),
  CohortTopicSettingsSchema: CohortTopicSettingsSchema(conn),
  GraduateProfileEndorsementSchema: GraduateProfileEndorsementSchema(conn),
  GraduateProfileLifeSkillSchema: GraduateProfileLifeSkillSchema(conn),
  GraduateProfileProjectSchema: GraduateProfileProjectSchema(conn),
  GraduateProfileSchema: GraduateProfileSchema(conn),
  OrganizationSchema: OrganizationSchema(conn),
  ProjectFeedbackSchema: ProjectFeedbackSchema(conn),
  ProjectSchema: ProjectSchema(conn),
  ReviewerSurveySchema: ReviewerSurveySchema(conn),
  ReviewQuestionSchema: ReviewQuestionSchema(conn),
  TagSchema: TagSchema(conn),
  EndorsementSchema: EndorsementSchema(conn),
  HiringProcessSchema: HiringProcessSchema(conn),
  JobOpportunitySchema: JobOpportunitySchema(conn),
  OrganizationMembershipSchema: OrganizationMembershipSchema(conn),
  TopicSchema: TopicSchema(conn),
  TopicUnitSchema: TopicUnitSchema(conn),
  // eslint-disable-next-line no-undef
  TopicUnitPartSchema: TopicUnitPartSchema(conn, document || (typeof window !== 'undefined' ? window : {}).document),
  UserSchema: UserSchema(conn),
  UserActivityFeedEventSchemas: UserActivityFeedEventSchemas(conn),
  ProgressSchema: ProgressSchema(conn),
  ProgressUnitSchema: ProgressUnitSchema(conn),
  ProgressPartSchema: ProgressPartSchema(conn),
});
