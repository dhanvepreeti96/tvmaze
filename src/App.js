import "./App.css";
import pic from './tvlogo.jpg'
import styled from "styled-components";
import Home from "./HomePage.js";

const Placeholder =styled.img`
width: 400px;
height: 400px;
margin: 50px;
opacity: 60%;
`;

function App() {
  return (
    <div className="App">
      <Home />
      <Placeholder src={pic}/>
    </div>
  );
}

export default App;