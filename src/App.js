import Header from './components/Header';
import Tasks from './components/Tasks'
import { useState } from 'react';






function App() {
  //now we set the state with a destructuring of the array 
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meetting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} /> 
    </div>
  );
}

export default App;
