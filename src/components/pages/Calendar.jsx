import React, {useState, useEffect} from "react"


const Calendar = ( ) => {
  return(
    <div className="main">
      <div className="mainDiv">
        <table className='pt pb'>
          <thead >
            <tr style={{backgroundColor: 'var(--primary)'}}>
              <th></th>
              <th>Date</th>
              <th>Location</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <TableRow who='Clint Breeze and the Groove' date='8.20.21' where='State Street Pub' time='doors 8p' />
            <TableRow who='Tucker Brothers' date='8.25.21' where='Chatterbox' time='8-11p' />
            <TableRow who='John Raymond' date='8.27.21' where='Jazz Kitchen' time='7p and 9:30p' />
            <TableRow who='Tucker Brothers' date='8.28.21' where='Ouibache Music Fest' time='7:45p' />
            <TableRow who='The Shed' date='9.1.21' where='Jazz Kitchen' time='9-midnight' />
            <TableRow who='Clint Breeze and the Groove' date='9.17.21' where='Jazz Kitchen' time='7 and 9:30p' />
            <TableRow who='Kenny Banks Trio' date='9.18.21' where='Indy Jazz Fest' time='TBD' />
            <TableRow who='Clint Breeze Quartet' date='9.22.21' where='Kurt Vonnegut Library' time='6-8p' />
            <TableRow who='Miguel Zenon' date='10.8.21' where='Ball State University' time='7:30p' />
            <TableRow who='Clint Breeze and the Groove' date='10.9.21' where='Cottage Home Block Party' time='TBD' />
            {/* <TableRow who='Tucker Brothers' date='8.25.21' where='Chatterbox' time='8-11p' /> */}
          </tbody>
        </table>
      </div>

    </div>
  )
}

const TableRow = props => {
  const {who, date, where, time} = props
  const [datePassed, setDatePassed] = useState(false);

  const [month, day, year] = date.split('.')
  
  const today = new Date()
  const gigDate = new Date(parseInt(year)+2000, parseInt(month)-1, parseInt(day))

  useEffect(() => {
    setDatePassed(today+2 > gigDate) //leave it on calendar for a couple days
  }, [])

  return(
    datePassed ? null :
    <tr>
      <td>{who}</td>
      <td>{date}</td>
      <td>{where}</td>
      <td>{time}</td>
    </tr>
  )
}
export default Calendar