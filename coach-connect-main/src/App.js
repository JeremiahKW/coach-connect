import React from 'react';
import Navbar from './Components/NavBar/navbar';
import { ScrollViewClients } from './Components/ClientSearch/scrollViewClients';


const LeftSideComponent = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
}

const MiddleComponent = () => {
  return <ScrollViewClients />
}

const RightSideComponent = () => {
  return <h1 className='bg-red-500'>WORLD</h1>;
}

function App() {
  return (
    <Navbar />
  );
}

export default App;
