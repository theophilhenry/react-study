import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Tasks from './components/Tasks';
import About from './components/About';
import Footer from './components/Footer';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const varTasks = [
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 7th at 2:30pm',
      reminder: false,
    },
  ]
  const [showForm, setFormState] = useState(false)
  const [tasks, setTask] = useState(varTasks)

  const storeTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    setTask([...tasks, { id, ...task }])
  }

  const destroyTask = (id) => {
    setTask(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task
      })
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header onClickAdd={() => setFormState(!showForm)} showForm={showForm} />
        <Routes>
          <Route path='/' element={
            <>
              {showForm && <Form onAddTask={storeTask} />}
              <Tasks tasks={tasks} toggleReminder={toggleReminder} onDeleteTask={destroyTask} />
            </>
          } />
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
