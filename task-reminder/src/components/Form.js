import { useState } from 'react'

function Form({ onAddTask }) {
    const [formText, setFormText] = useState('')
    const [formDay, setFormDay] = useState('')
    const [formReminder, setFormReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!formText || !formDay) {
            alert('Please fill in the correct information')
            return
        }

        onAddTask({ text: formText, day: formDay, reminder: formReminder})

        setFormText('')
        setFormDay('')
        setFormReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Add Task</label>
                <input id="task" type="text" placeholder="Add Task" value={formText} onChange={(e) => setFormText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="day">Add Day</label>
                <input id="day" type="text" placeholder="Add Day" value={formDay} onChange={(e) => setFormDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input id="reminder" type="checkbox" checked={formReminder} onChange={(e) => setFormReminder(e.currentTarget.checked)} />
            </div>
            <button type='submit' className='btn btn-block'>Save Task</button>
        </form>
    )
}

export default Form
