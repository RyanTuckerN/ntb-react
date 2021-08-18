import React from "react"

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
          <TableRow who='Clint Breeze and the Groove' date='8.20.21' where='State Street Pub' time='doors 8p' />
          <TableRow who='Tucker Brothers' date='8.25.21' where='Chatterbox' time='8-11p' />
          <TableRow who='John Raymond' date='8.27.21' where='Jazz Kitchen' time='7p and 9:30p' />
          <TableRow who='The Shed' date='9.1.21' where='Jazz Kitchen' time='9-midnight' />
          {/* <TableRow who='Tucker Brothers' date='8.25.21' where='Chatterbox' time='8-11p' /> */}
        </table>
      </div>

    </div>
  )
}

const TableRow = props => {
  const {who, date, where, time} = props
  return(
    <tr>
      <td>{who}</td>
      <td>{date}</td>
      <td>{where}</td>
      <td>{time}</td>
    </tr>
  )
}
export default Calendar