
import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainSection from './components/main_section';
import { Suspense } from 'react';

// fetch data
const fetchData = async () => {
  const response =await fetch('../public/ticket.json');
  const data = response.json();
  return data;
}

function App() {
const fetchDataResult = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
    <Suspense>
        <MainSection fetchDataResult={fetchDataResult}></MainSection>
    </Suspense>
    
    </>
  )
}

export default App
