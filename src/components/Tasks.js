
import SingleTask from "./SingleTask"

const Tasks = ({ tasks, onDelete1, onToggle1 }) => {
    return (
        <>
            {tasks.map((taskPar, index) => (
                <div>
                    <SingleTask 
                    key={index} 
                    taskPar={taskPar} 
                    onDelete2={onDelete1} 
                    onToggle2={onToggle1}
                    />
                </div>
            ))}
        </>
    )
}

export default Tasks
