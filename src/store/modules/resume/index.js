import { getters } from "./getters";
import { mutations } from "./mutation";
import { v4 as uuidv4 } from "uuid";

const initState = {
  resumes: [
    {
      resumeId: 1,
      title: "1번 이력서",
      date: "2022-03-23",
      isDefault: true,
      details: {
        profile: {
          email: "rpdyddns3620@gmail.com",
          phone: "010-3333-4444",
        },
        techs: ["Java", "React.js", "React-Native"],
        desiredJobs: ["Backend", "FrontEnd"],
        workExperienceDetails: [
          {
            detailId: uuidv4(),
            companyName: "한화시스템",
            stack: "ALL",
            job: "대표이사",
            startDate: "2020-02-28",
            endDate: "2024-04-08",
          },
        ],
        educationDetails: [
          {
            detailId: uuidv4(),
            school: "서울대학교",
            stack: "컴퓨터공학",
            job: "학사",
            startDate: "2018-03-02",
            endDate: "2022-02-28",
            averageGPA: "3.8/4.5",
            highestGPA: "4.5/4.5",
          },
        ],
        awardsAndCertificationDetails: [
          {
            detailId: uuidv4(),
            certificationTitle: "1종 대형 운전 면허",
            certificationContent: "나는 이제 버스를 몰 수 있어요 !",
            certificationDate: "2024-08-16",
          },
        ],
      },
    },
    {
      resumeId: 2,
      title: "2번 이력서",
      date: "2022-04-25",
      isDefault: false,
      details: {
        profile: {
          email: "beyond@gmail.com",
          phone: "010-2222-3333",
        },
        techs: ["React.js", "React-Native"],
        desiredJobs: ["FrontEnd"],
        workExperienceDetails: [
          {
            detailId: uuidv4(),
            companyName: "beyond sw camp",
            stack: "Backend",
            job: "사원",
            startDate: "2020-01-28",
            endDate: "2024-04-08",
          },
        ],
        educationDetails: [
          {
            detailId: uuidv4(),
            school: "아무개대학교",
            stack: "컴퓨터공학",
            job: "석사",
            startDate: "2018-01-02",
            endDate: "2020-02-28",
            averageGPA: "4.2/4.5",
            highestGPA: "4.5/4.5",
          },
        ],
        awardsAndCertificationDetails: [
          {
            detailId: uuidv4(),
            certificationTitle: "정보처리기사",
            certificationContent: "",
            certificationDate: "2018-08-16",
          },
        ],
      },
    },
  ],
};

const state = () => initState;

export default { namespace: true, state, mutations, getters };
