import '../../src/App.css';

const AddTask = ({ taskList, setTaskList,task,setTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            
            const updatedTaskList = taskList.map((todo) => (
                todo.id === task.id ?
                    { id: todo.id, title: task.title } : todo
            ))

            setTaskList(updatedTaskList);
            setTask({});
            
        } else {
            const date = new Date();
            // console.log(date.toLocaleDateString());
            const newTask = {
                id: date.getTime(),
                title: e.target.task.value,
                completed:false
            };

            setTaskList([...taskList, newTask]);
            setTask({});
        }

        
    }
    return (
			<>
				<section className="addTask">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="task"
							value={task.title || ""}
							autoComplete="off"
							placeholder="add task"
                        maxLength={25}
                        onChange={e => setTask({...task, title:e.target.value})}
						/>
                    <button type="submit">{ task.id ? "Update":"Add"}</button>
					</form>
				</section>
			</>
		);
};

export default AddTask;
