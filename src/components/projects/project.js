import {
  MainContainer,
  Header,
  CardContainer,
  Card,
  CardText,
  CardLinkContainer,
  CardDescriptionContainer,
} from './project.style';

const project = () => {
  return (
    <MainContainer>
      <Header>PROJECTS</Header>
      <CardContainer>
        <Card></Card>
        <CardDescriptionContainer>
          <CardText>모두의시간 웹 개발</CardText>
          <CardLinkContainer>dd</CardLinkContainer>
        </CardDescriptionContainer>
      </CardContainer>
      <CardContainer>
        <Card>ddd</Card>
      </CardContainer>
    </MainContainer>
  );
};

export default project;
