import React from 'react';
import { SplitScreen } from './Components/Splitscreen';
import Navbar from './Components/navbar';
import { ScrollViewClients } from './clients/scrollViewClients';


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
    <SplitScreen leftWeight={1} middleWeight={3} rightWeight={10}>
      <LeftSideComponent />
      <MiddleComponent />
      <RightSideComponent />
    </SplitScreen>
  );
}

export default App;
