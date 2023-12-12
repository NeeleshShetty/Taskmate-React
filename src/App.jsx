import React, { useState } from 'react'
import { useEffect } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import ShowTask from './components/ShowTask'
const App = () => {
  const [taskList, setTaskList] = useState( JSON.parse(localStorage.getItem("taskList")) ||[]);
  const [task, setTask] = useState({});

  useEffect(() => (
    localStorage.setItem("taskList",JSON.stringify(taskList))
  ),[taskList])
  return (
		<>
			<Header />
			<AddTask
				taskList={taskList}
				setTaskList={setTaskList}
				task={task}
				setTask={setTask}
			/>
			<ShowTask
				taskList={taskList}
				setTaskList={setTaskList}
				task={task}
				setTask={setTask}
			/>
		</>
	);
}

export default App