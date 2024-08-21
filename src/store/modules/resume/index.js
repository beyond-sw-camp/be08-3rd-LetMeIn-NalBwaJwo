import { getters } from "./getters";
import { mutations } from "./mutation";

const initState = {
  workExperienceDetail: {
    companyName: "한화시스템",
    stack: "ALL",
    job: "대표이사",
    startDate: "2020-02-28",
    endDate: "2024-04-08",
  },
  educationDetail: {
    school: "서울대학교",
    stack: "컴퓨터공학",
    job: "학사",
    startDate: "2018-03-02",
    endDate: "2022-02-28",
    averageGPA: "3.8/4.5",
    highestGPA: "4.5/4.5",
  },
  awardsAndCertificationDetail: {
    certificationTitle: "1종 대형 운전 면허",
    certificationContent: "나는 이제 버스를 몰 수 있어요 !",
    certificationDate: "2024-08-16",
  },
};

const state = () => initState;

export default { namespace: true, state, mutations, getters };
