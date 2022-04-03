import logo from './logo.svg';
import './App.css';
import Ccomponent from './Ccomponent';
import styled from 'styled-components';
import Title from './Title';
import Flex from './Flex';
const AppWrapper = styled.div`
width:100%;
min-height:100vh;
padding:2rem;
background:black;
color:white;
`

const App = () => {
  return (
    <AppWrapper> 

    <Flex justify="center">   <Title color={"green"}>Заголовок</Title>
    </Flex>
    
     
   </AppWrapper> 
  );
}

export default App;
