import { useEffect } from 'react';
import '../../src/App.css';

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {

	//fetch the todos from API
	useEffect(() => {
		async function fetchTodo() {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/todos'
				);	
				const data = response.json();
				setTaskList(data);
			} catch (error) {
				
			}
		}
	},[])

	const clearAll = () => {
		setTaskList([]);
    };
    
    const handleEdit = (id) => {
        const selectedTask = taskList.find(todo => todo.id === id);
        // console.log(selectedTask);
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter((todo) => todo.id !== id);
        setTaskList(updatedTaskList);
    }
	return (
		<>
			<section className="showTask">
				<div className="head">
					<div>
						<span className="title">Todo</span>
						<span className="count">{taskList.length}</span>
					</div>
					<button
						className="clearAll"
						onClick={clearAll}
					>
						Clear All
					</button>
				</div>
				<ul>
					{taskList.map((todo) => (
						<li key={todo.id}>
							<p>
								<span className="name">{todo.title}</span>
								
							</p>
							<i className="bi bi-pencil-square" onClick={()=>handleEdit(todo.id)}></i>
							<i className="bi bi-trash" onClick={()=>handleDelete(todo.id)}></i>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default ShowTask;
