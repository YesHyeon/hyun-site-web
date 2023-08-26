export const PROJECTS = [
  {
    id: '0',
    title: 'Modu Time : Web',
    kr: '모두의 시간 : 약속시간 정하기',
    stack: 'React, Typescript, Recoil ',
    date: '2023.01.03-2023.05.15',
    image: 'assets/projects/modu.png',
    description: '다수의 시간 조율을 도와주는 웹앱 서비스 개발',
    info: [
      'Vercel과 AWS Clud Front를 통한 배포를 진행했고 누적 접속수 1000 이상 기록',
      '약속을 조율할 수 있는 방 생성 페이지 개발 및 링크공유 기능 개발',
      '스크롤에 따른 애니메이션을 추가하여 인터랙티브한 랜딩페이지 제작',
      '유지보수를 통한 크로스 브라우징 이슈 해결 \n -> iOS 버전에 따른 Date 객체가 NaN으로 표시되는 문제 해결 \n -> iOS 15버전 이상부터 Input 창의 가상 키보드 뒤에 가상 영역이 생기는 문제 해결 ',
      '코드의 가독성 및 효율적인 서버데이터 관리를 위한 React-Query를 도입하는 등 지속적인 리팩터링 진행',
      'Clean 코드를 지향하며 유지 보수에 용이한 코드를 작성하였고, 팀원과 코딩 컨벤션을 신경 쓰며 개발 및 학습',
      'GA를 설치하여 트래픽을 파악하고 사용자의 행동을 이벤트 단위로 분석하는 방법 학습',
    ],
    link: [
      {
        깃허브: 'https://github.com/dnd-side-project/dnd-8th-5-frontend',
      },
      {
        사이트: 'https://modutime.site/',
      },
    ],
  },
  {
    id: '1',
    title: 'Rabbit : App',
    kr: '래빗 : 시카고 안전한 경로 앱',
    stack: 'ReactNative, Typescript, Redux',
    date: '2022.09.01-2022.12.22',
    description: '미국 시카고의 범죄로부터 안전한 경로를 추천해주는 앱 개발',
    image: 'assets/projects/rabbit.png',
    info: [
      '구글맵 API를 활용하여 위험지역 Polygon 설정 및 5개의 안전한 경로탐색 기능 구현',
      'CPU의 한계로 경로검색시 사용자가 빈 화면을 15초 이상 경험하는 문제 \n → 로딩 컴포넌트를 추가하는 UX 설계와, 데이터 구조를 변경하여 사용자가 3초 이상 빈 화면을 보지 않도록 개선',
      '서버에서 받은 대량의 Json 파일을 가공하여 범죄위험 지역 표시',
      'Figma를 활용하여 어플의 전반적인 UI/UX 디자인',
    ],
    link: [
      {
        깃허브: 'https://github.com/YesHyeon/RabbitApp',
      },
      {
        데모영상: 'https://youtu.be/Z5gqHrr86ao',
      },
    ],
  },
  {
    id: '2',
    title: 'CCC : Chrome extension',
    kr: 'CCC : 보기쉬운 유튜브 자동자막',
    stack: 'React, JavaScript, Vite, Python, Django',
    date: '2023.04.01 - 2023.07.25',
    description:
      '유튜브의 자동자막 서비스의 문제점을 해결하기 위한 크롬 익스텐션 서비스 개발',
    image: 'assets/projects/ccc.png',
    info: [
      'DOM 조작을 통해 유튜브 자동자막의 배치를 영상 하단으로 수정',
      '자막 스타일 변경 기능을 제공하여 사용자의 자막 사용경험을 더욱 높임',
      '현재 자막만 제공하여 보기 불편한 문제를 해결하기 위해, 이전 자막과 다음 자막을 같이 제공',
      '텍스트분석을 통해 자막을 문장으로 재구성하기 위한 서버 구축',
    ],
    link: [
      {
        깃허브: 'https://github.com/YesHyeon/Youtube-Sub-Maker',
      },
      {
        크롬익스텐션:
          'https://chrome.google.com/webstore/detail/ccc-%EC%9C%A0%ED%8A%9C%EB%B8%8C-%EC%9E%90%EB%8F%99%EC%9E%90%EB%A7%89-%EC%83%9D%EC%84%B1%EA%B8%B0/keonbpokgpalcoemgeojdelnhomdminb?utm_source=ext_sidebar&hl=ko',
      },
    ],
  },
  {
    id: '3',
    title: 'PortfolioSite : Web',
    kr: '포트폴리오 사이트 : 개발자 노현',
    stack: 'React, JavaScript',
    date: '2023.07.01 - 2023.08.31',
    description:
      '그동안의 활동들과 프로젝트를 정리한 인터랙티브한 포트폴리오 사이트 개발',
    image: 'assets/projects/portfolio.png',
    info: [
      '각종 애니메이션이 담긴 인터랙티브한 페이지 개발',
      '모바일과 데스크탑을 고려한 반응형 페이지 개발',
      'UI & UX를 깊게 고민하며 스스로 디자인하였고, 애니메이션 최적화 기법에 대해 학습',
    ],
    link: [
      {
        깃허브: 'https://github.com/YesHyeon/hyun-site-web',
      },
      {
        사이트: 'https://www.yeshyun.site/',
      },
    ],
  },
  {
    id: '4',
    title: 'HospitalDelicious : Web',
    kr: '병원맛집 : 질병맞춤 병원추천 웹',
    stack: 'React, TypeScript, Recoil',
    date: '2023.06.28 - 2023.06.30',
    description:
      '유튜브의 자동자막 서비스의 문제점을 해결하기 위한 크롬 익스텐션 서비스 개발',
    image: 'assets/projects/hospital.png',
    info: [
      '리더를 맡아 프로젝트를 주도했고, 200명 앞에서 프로젝트에 사용된 기술과 가치에 대해 공유하는 즐거움을 느낌',
      'chatGPT 프롬프트 엔지니어링 방법을 학습하여 AI 기술이 담긴 웹앱 형식의 서비스 개발',
      'Input 입력칸의 오타를 감지하기 위해 정규식을 활용하여 문자열 검사',
      '단순히 state 값을 14개의 버튼 수만큼 두어서 state 값을 변경했는데, 로직을 개선하여 코드 길이 절반 이상 감소',
    ],
    link: [
      {
        깃허브: 'https://github.com/YesHyeon/2023-sw-hackathon/tree/develop',
      },
      {
        사이트: 'https://2023-sw-hackathon-dev.vercel.app/',
      },
    ],
  },
  {
    id: '5',
    title: 'SnoopyToDo : Web',
    kr: '스누피의 명언 : ToDo 사이트',
    stack: 'JavaScript',
    date: '2021.03.01 - 2021.04.01',
    description:
      'ToDo-List 작성 및 새로고침시 스누피의 명언을 확인할 수 있는 사이트',
    image: 'assets/projects/snoopy.png',
    info: [
      '날짜별 ToDo \n -> 원하는 날짜를 클릭해 할 일을 저장할 수 있습니다. (daily) \n delayed 로 daily의 할 일들을 옮길 수 있음. 이 경우 다른 날짜를 클릭해도 항목이 유지 ',
      '이름과 ToDo \n -> local storage를 이용해 유저의 이름과 할 일 목록들을 저장합니다. \n -> map collection으로 데이터 관리 ',
      'weather API \n -> 외부 weather API를 사용하는 방법 학습',
      '반응형 웹, preloader \n -> 반응형 웹 구현 \n -> 배경 그림 크기가 크다보니 로딩에 시간에 걸려 preloader 도입 ',
    ],
    link: [
      {
        깃허브: 'https://github.com/shgus1224/snoopy_site',
      },
      {
        사이트: 'https://snoopy-todo.vercel.app/',
      },
    ],
  },
  {
    id: '6',
    title: 'MANLIVEYOUNG : Web',
    kr: '맨리브영 : 남자 화장품 추천 앱',
    stack: 'Flutter',
    date: '2023.04.01 - 2023.06.25',
    description:
      'Flutter를 이용해 개발한 피부타입에 따른 남자화장품 및 루틴 추천  앱',
    image: 'assets/projects/manliveyoung.png',
    info: [
      '프로젝트의 리더를 맡아 팀원들을 이끌었고 A+ 성적을 받음',
      '전체적인 페이지를 먼저 개발한 뒤, Firebase 저장소와 연동하여 DB에 있는 내용을 적용',
      '데이터 형식은 JSON 형식을 유지하여, Rest API 기반으로 백엔드 서버와 소통하기 용이하도록 관리',
      '동적으로 적용되어야 하는 데이터는 setState로 관리해 실시간으로 데이터를 업데이트',
      '비동기처리를 통한 Firebase와의 연동 및 로그인 기능 구현',
      'UI & UX를 깊게 고민하며 스스로 디자인',
      'Github 저장소를 통해 기능별로 commit을 등록해 관리하고, 슬랙과 노션을 도입하여 원활한 협업 진행',
    ],
    link: [
      {
        깃허브: 'https://github.com/YesHyeon/flutter-hwahae-app',
      },
      {
        데모영상:
          'https://user-images.githubusercontent.com/81014501/244927473-73d64286-c742-42be-837b-1ddccd0d6357.mp4',
      },
    ],
  },
];
