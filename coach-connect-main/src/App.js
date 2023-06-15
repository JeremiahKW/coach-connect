import React from 'react';
import Navbar from './Components/NavBar/navbar';
import { ScrollViewClients } from './Components/ClientSearch/scrollViewClients';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://mpvvmognqqbdrkaxwxpr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdnZtb2ducXFiZHJrYXh3eHByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY4NTcxNDYsImV4cCI6MjAwMjQzMzE0Nn0.LdwvrpeNPNTolUxpY26nDSEn-qNHMn6d-KGcCHHocKc");


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
