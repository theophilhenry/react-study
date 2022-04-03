import Task from "./Task"

function Tasks({ tasks, toggleReminder, onDeleteTask }) {
    return (
        <>
            {tasks.map((task, index) => {
                return <Task key={task.id} task={task} toggleReminder={toggleReminder} onDeleteTask={onDeleteTask} />
            })}
        </>
    )
}

export default Tasks
