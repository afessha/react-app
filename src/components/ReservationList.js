import './Component.css';
const ReservationList = ({reservations}) => {
  // if condition true do this else do that
  // condition ? do this : do that 
  const hasNoReservations = reservations.length === 0;
  return (
    <div>
      <h2> Reservation List</h2>
      {hasNoReservations ? <p> No reservations!</p> :
        <table>
          <thead> 
            <th> Name</th>
            <th> Email</th>
            <th> Number</th>
          </thead>
          <tbody>
            {reservations.map((reservation)=>{
              return (
                <tr>
                  <td> {reservation.name}</td>
                  <td> {reservation.email}</td>
                  <td> {reservation.number}</td>

                </tr>)

            })}
          </tbody>
        </table>
      }
    </div>
  );

};
export default ReservationList;
