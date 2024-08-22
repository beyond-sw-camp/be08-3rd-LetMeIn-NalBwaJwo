import { v4 as uuidv4 } from "uuid";

export const RESUME_MUTATION_TYPES = {
  SAVE_WORKEXPERIENCE: "resume/SAVE_WORKEXPERIENCE",
  SAVE_EDUCATION: "resume/SAVE_EDUCATION",
  SAVE_AWARDS_AND_CERTIFICATIONS: "resume/AWARDS_AND_CERTIFICATIONS",
  EDIT_EMAIL: "resume/EDIT_EMAIL",
  EDIT_PHONE: "resume/EDIT_PHONE",
  ADD_MAIN_TECH: "resume/ADD_MAIN_TECH",
  ADD_DESIRED_JOB: "resume/ADD_DESIRED_JOB",
  SET_DEFAULT_RESUME: "resume/SET_DEFAULT_RESUME",
  DELETE_RESUME: "resume/DELETE_RESUME",
};

export const mutations = {
  // 업무 경험 추가
  [RESUME_MUTATION_TYPES.SAVE_WORKEXPERIENCE](state, payload) {
    const { resumeId, formData } = payload;
    console.log(resumeId, formData);

    const resume = state.resumes.find((resume) => resume.resumeId === resumeId);
    const workExperienceDetails = resume.details.workExperienceDetails;

    const newData = {
      detailId: uuidv4(),
      ...formData,
    };
    workExperienceDetails.push(newData);
  },
  // 학력 추가
  [RESUME_MUTATION_TYPES.SAVE_EDUCATION](state, payload) {
    const { resumeId, formData } = payload;
    console.log(resumeId, formData);

    const resume = state.resumes.find((resume) => resume.resumeId === resumeId);
    const educationDetails = resume.details.educationDetails;

    const newData = {
      detailId: uuidv4(),
      ...formData,
    };
    educationDetails.push(newData);
  },
  // 수상/자격증 추가
  [RESUME_MUTATION_TYPES.SAVE_AWARDS_AND_CERTIFICATIONS](state, payload) {
    const { resumeId, formData } = payload;
    console.log(resumeId, formData);

    const resume = state.resumes.find((resume) => resume.resumeId === resumeId);
    const awardsAndCertificationDetails =
      resume.details.awardsAndCertificationDetails;

    const newData = {
      detailId: uuidv4(),
      ...formData,
    };
    awardsAndCertificationDetails.push(newData);
  },
  // 이메일 수정
  [RESUME_MUTATION_TYPES.EDIT_EMAIL](state, payload) {
    const { resumeId, email } = payload;

    const resume = state.resumes.find((resume) => resume.resumeId === resumeId);
    const profile = resume.details.profile;

    profile.email = email;
  },
  // 전화번호 수정
  [RESUME_MUTATION_TYPES.EDIT_PHONE](state, payload) {
    const { resumeId, phone } = payload;

    const resume = state.resumes.find((resume) => resume.resumeId === resumeId);
    const profile = resume.details.profile;

    profile.phone = phone;
  },
  // 메인 기술 추가
  [RESUME_MUTATION_TYPES.ADD_MAIN_TECH](state, payload) {
    const { resumeId, tech } = payload;

    const resume = state.resumes.find((resume) => resume.resumeId === resumeId);
    const techs = resume.details.techs;
    techs.push(tech);
  },
  // 희망 직업 추가
  [RESUME_MUTATION_TYPES.ADD_DESIRED_JOB](state, payload) {
    const { resumeId, desiredJob } = payload;

    const resume = state.resumes.find((resume) => resume.resumeId === resumeId);
    const desiredJobs = resume.details.desiredJobs;
    desiredJobs.push(desiredJob);
  },
  // 대표 이력서 설정
  [RESUME_MUTATION_TYPES.SET_DEFAULT_RESUME](state, payload) {
    const { resumeId } = payload;
    console.log(resumeId);
    console.log(payload);

    const old = state.resumes.find((resume) => resume.isDefault === true);
    old.isDefault = false;
    const resume = state.resumes.find((resume) => resume.resumeId === resumeId);
    resume.isDefault = true;
  },
  // 이력서 삭제
  [RESUME_MUTATION_TYPES.DELETE_RESUME](state, payload) {
    const { resumeId } = payload;
    console.log(resumeId);
    state.resumes = state.resumes.filter(
      (resume) => resume.resumeId !== resumeId
    );
  },
};
