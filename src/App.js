
import { useState } from 'react';
import './App.css';
import  AddReservation  from './components/AddReservation';
import  ReservationList from './components/ReservationList';

const App = () => {
  const [reservations, setReservations] = useState([]);
  const addReservation = (reservation)=>{
    setReservations([...reservations, reservation]);
  }
  return (
    <div className="App">
      <h1> WELCOME TO MY APP</h1>
      <AddReservation onAdd = {addReservation}/>
      <ReservationList reservations = {reservations}/>
      
    </div>
  );
}

export default App;
