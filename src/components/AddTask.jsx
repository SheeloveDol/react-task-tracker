import React from 'react';
import { useState } from 'react';

const AddTask = () => {
  // To add/save new tasks
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  return (
    <form className='add-form'>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task"  value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="A Date & Time" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type="submit" value="Save Task" 
      className="btn btn-block" />
    </form>
  )
}

export default AddTask