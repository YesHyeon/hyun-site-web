import {
  MainContainer,
  Header,
  CardContainer,
  CardWrapper,
  Card,
  CardText,
  CardLinkContainer,
  CardDescriptionContainer,
} from './project.style';

import ccc from '../../assets/images/projects/ccc.png';
import modu from '../../assets/images/projects/modu.png';
import rabbit from '../../assets/images/projects/rabbit.png';
import hospital from '../../assets/images/projects/hospital.png';

const records = [
  {
    id: '1',
    title: 'Modu Time : Web',
    kr: '모두의 시간 : 약속시간 정하기',
    stack: 'React, Typescript, Recoil ',
    date: '2023.01.03-2023.05.15',
    image: modu,
    info: [
      '다수의 시간 조율을 도와주는 웹앱 서비스 개발',
      [
        '터미널로 쿼리문을 작성해 로그를 생성하여 테스트하는 문제를 인식하고, 로그 데이터 모킹을 통해 로그 검증 테스트 자동화',
        '대량의 로그 생성 & 테스트할 수 있는 백오피스 화면 개발',
        '10개 이상의 컬럼이 포함된, 구조 수정이 가능한 Table UI 구현 및 필터링 UI 구현',
        '로그를 확인할 수 있는 테이블에 적용된 무한 스크롤 기능을 pagination으로 개선하여 사용자의 경험을 높임 \n -> 3번의 스크롤 경험을 1번의 클릭 경험으로 개선',
        '기존 Search API로만 로그데이터를 검색하던 것을 Search After API로 개선 \n ->검색속도 약 20% 상승 ',
      ],
    ],
  },
  {
    id: '2',
    title: 'Rabbit : App',
    kr: '래빗 : 시카고 안전한 경로 앱',
    stack: 'ReactNative, Typescript, Redux',
    date: '2022.09.01-2022.12.22',
    image: rabbit,
    info: [
      '미국 시카고의 범죄로부터 안전한 경로를 추천해주는 앱 개발',
      [
        '서비스의 DAU가 줄어드는 문제를 인식하고, 앱 내에서 별점을 요청하는 프로젝트를 리드 \n -> 사용자 경험을 방해하지 않는 로직을 재설계하여 두 달만에 ⭐ 0.7 이상 상승',
        '문의하는 과정이 번거롭다는 니즈를 파악하여 앱 내에서 문의가 가능하도록 채널톡 기능 추가 \n -> 문의하는 사용자의 수가 약 30% 증가하여, 오류 및 개선점을 빠르게 파악 ',
        '사용자의 경험을 높이기 위한 랜딩페이지 반응형 제작 및 스크롤 애니메이션 도입',
        '강아지의 감정을 AI로 분석하여 결과를 보여주는 댕상분석 이벤트 페이지 개발',
      ],
    ],
  },
  {
    id: '3',
    title: 'CCC : Chrome extension',
    kr: 'CCC : 보기쉬운 유튜브 자동자막',
    stack: 'React, JavaScript, Vite, Python, Django',
    date: '2023.04.01 - 2023.07.25',
    image: ccc,
    info: [
      '유튜브의 자동자막 서비스의 문제점을 해결하기 위한 크롬 익스텐션 서비스 개발',
      [
        '서비스의 DAU가 줄어드는 문제를 인식하고, 앱 내에서 별점을 요청하는 프로젝트를 리드 \n -> 사용자 경험을 방해하지 않는 로직을 재설계하여 두 달만에 ⭐ 0.7 이상 상승',
        '문의하는 과정이 번거롭다는 니즈를 파악하여 앱 내에서 문의가 가능하도록 채널톡 기능 추가 \n -> 문의하는 사용자의 수가 약 30% 증가하여, 오류 및 개선점을 빠르게 파악 ',
        '사용자의 경험을 높이기 위한 랜딩페이지 반응형 제작 및 스크롤 애니메이션 도입',
        '강아지의 감정을 AI로 분석하여 결과를 보여주는 댕상분석 이벤트 페이지 개발',
      ],
    ],
  },
  {
    id: '4',
    title: 'HospitalDelicious : Web',
    kr: '병원맛집 : 질병맞춤 병원추천 웹',
    stack: 'React, TypeScript, Recoil',
    date: '2023.06.28 - 2023.06.30',
    image: hospital,
    info: [
      '유튜브의 자동자막 서비스의 문제점을 해결하기 위한 크롬 익스텐션 서비스 개발',
      [
        '서비스의 DAU가 줄어드는 문제를 인식하고, 앱 내에서 별점을 요청하는 프로젝트를 리드 \n -> 사용자 경험을 방해하지 않는 로직을 재설계하여 두 달만에 ⭐ 0.7 이상 상승',
        '문의하는 과정이 번거롭다는 니즈를 파악하여 앱 내에서 문의가 가능하도록 채널톡 기능 추가 \n -> 문의하는 사용자의 수가 약 30% 증가하여, 오류 및 개선점을 빠르게 파악 ',
        '사용자의 경험을 높이기 위한 랜딩페이지 반응형 제작 및 스크롤 애니메이션 도입',
        '강아지의 감정을 AI로 분석하여 결과를 보여주는 댕상분석 이벤트 페이지 개발',
      ],
    ],
  },
];

const project = () => {
  return (
    <MainContainer>
      <Header>
        <div className="loop-text">PROJECTS</div>
        <div className="loop-text">PROJECTS</div>
        <div className="loop-text">PROJECTS</div>
        <div className="loop-text">PROJECTS</div>
      </Header>
      <CardContainer>
        {records.map((item) => {
          return (
            <CardWrapper key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="kr">{item.kr}</div>
              <div className="title">{item.title}</div>
              <div className="date">{item.date}</div>
            </CardWrapper>
          );
        })}
      </CardContainer>
    </MainContainer>
  );
};

export default project;
