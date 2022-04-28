import styled from 'styled-components';
import NavBar from './components/NavBar';
import TopicCards from './components/TopicCards'

export default function App() {
  return (
    <AppContainer>
      <NavBar />
      <TopicCards />
    </AppContainer>
  );
}

const AppContainer = styled.div`
display: grid;
padding: 10px;
width: 100vw;
justify-content: center;
`
