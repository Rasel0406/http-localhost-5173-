
import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainSection from './components/main_section';
import { Suspense, useState } from 'react';
import Footer from './components/footer';

// fetch data
const fetchData = async () => {
  const response = await fetch('/ticket.json');
  const data = await response.json();
  return data;
}

function App() {
const fetchDataResult = fetchData();

  // State: Task Status e jei tickets ache
  const [inProgressTickets, setInProgressTickets] = useState([]);
  
  // State: Resolved hoye geche jei tickets
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // Function: Card click korle Task Status e add hobe
  const addToInProgress = (ticket) => {
    // Check: Already ache kina?
    const alreadyExists = inProgressTickets.find(t => t.id === ticket.id);
    
    if (!alreadyExists) {
      // Ticket er status "In-Progress" kore add kora
      const updatedTicket = { ...ticket, status: 'In-Progress' };
      setInProgressTickets([...inProgressTickets, updatedTicket]);
    }
  };

  // Function: Complete button click korle Resolved e jabe
  const moveToResolved = (ticketId) => {
    const ticket = inProgressTickets.find(t => t.id === ticketId);
    
    if (ticket) {
      // In-Progress theke remove
      setInProgressTickets(inProgressTickets.filter(t => t.id !== ticketId));
      // Resolved e add
      setResolvedTickets([...resolvedTickets, ticket]);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner 
        inProgressCount={inProgressTickets.length} 
        resolvedCount={resolvedTickets.length}
      />
    <Suspense>
        <MainSection 
          fetchDataResult={fetchDataResult}
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}
          addToInProgress={addToInProgress}
          moveToResolved={moveToResolved}
        />
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App
