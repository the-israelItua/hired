const baseUrl = " https://hired-2.herokuapp.com";

export const requests = {
  login: `${baseUrl}/auth/login`,
  signup: `${baseUrl}/auth/signup`,
  getJobs: `${baseUrl}/jobs`,
  starJob: `${baseUrl}/profile/star`,
  getStarredJobs: `${baseUrl}/profile/star/jobs`,
  clearStarredJobs: `${baseUrl}/profile/star/clear`,
  submitProfile: `${baseUrl}/profile/create`,
};
