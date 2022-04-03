function Task({ task, toggleReminder, onDeleteTask }) {
    return (
        <div className={ task.reminder ? "task reminder" : "task"} onDoubleClick={() => toggleReminder(task.id)}>
            <h3>
                {task.text}
                <button className="btn" onClick={() => {onDeleteTask(task.id)}}>Delete</button>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
