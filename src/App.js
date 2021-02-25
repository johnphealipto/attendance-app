import React from 'react';

function App() {
  return (
    <div>
      <h1>Attendees</h1>
      <ul>
        {this.props.attendees.map((attendee, index) =>
          <li className="attendees__attendee" key={index}>
            {attendee.name}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App;
