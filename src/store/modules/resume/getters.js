export const getters = {
  getProfile: (state) => (id) => {
    console.log(id);

    return state.resumes.find((resume) => resume.resumeId === id).details
      .profile;
  },
  getTechs: (state) => (id) => {
    return state.resumes.find((resume) => resume.resumeId === id).details.techs;
  },
  getDesiredJobs: (state) => (id) => {
    return state.resumes.find((resume) => resume.resumeId === id).details
      .desiredJobs;
  },
  getDefaultResumeId: (state) => {
    const result = state.resumes.find((resume) => resume.isDefault === true);
    return result === undefined ? null : result.resumeId;
  },
  getWorkExperienceDetails: (state) => (id) => {
    return state.resumes.find((resume) => resume.resumeId === id).details
      .workExperienceDetails;
  },
  getEducationDetails: (state) => (id) => {
    console.log("getEducationDetails");

    return state.resumes.find((resume) => resume.resumeId === id).details
      .educationDetails;
  },
  getAwardsAndCertificationDetails: (state) => (id) => {
    return state.resumes.find((resume) => resume.resumeId === id).details
      .awardsAndCertificationDetails;
  },
  employmentDuration:
    (state) =>
    ({ resumeId, detailId }) => {
      console.log(resumeId, detailId);

      const { startDate, endDate } = state.resumes
        .find((resume) => resume.resumeId === resumeId)
        .details.workExperienceDetails.find(
          (detail) => detail.detailId === detailId
        );

      const start = new Date(startDate);
      const end = new Date(endDate);

      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();
      let days = end.getDate() - start.getDate();

      if (days < 0) {
        months--;
        days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      return `${years}년 ${months}개월 ${days}일`;
    },
};
