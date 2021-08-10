
import { FaTimes } from 'react-icons/fa'

const SingleTask = ({ taskPar, onDelete2, onToggle2 }) => {
    return (
        <div 
        className={`task ${taskPar.reminder ? 'reminder' : '' }`}
        onDoubleClick={() => onToggle2(taskPar.id)}
        >
            <h3>{taskPar.text} 
            <FaTimes 
            style={{color:'red', cursor: 'pointer'}} 
            onClick={ () => onDelete2(taskPar.id)}
            /> </h3>
            <p>{taskPar.date}</p>
        </div>
    )
}

export default SingleTask
