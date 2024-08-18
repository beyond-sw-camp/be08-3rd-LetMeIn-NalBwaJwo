import { mutations } from "./mutation";

const initState = {
  details: [
    {
      id: "workExperience",
      title: "업무경험",
      form: "WorkExperienceForm",
      formVisible: false,
    },
    {
      id: "education",
      title: "학력",
      form: "EducationForm",
      formVisible: false,
    },
    {
      id: "awardsAndCertification",
      title: "수상/자격증",
      form: "AwardsAndCertificationForm",
      formVisible: false,
    },
  ],
};

const state = () => initState;

export default { namespace: true, state, mutations };
