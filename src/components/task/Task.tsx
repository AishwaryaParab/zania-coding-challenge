import "./Task.css";

export interface TaskProps {
    title: string;
    description: string;
    status: string;
    category: string;
    id: number;
    onDelete: (id: number) => void;
    onComplete: (id: number) => void;
}

const Task = ({ id, title, description, status, category, onDelete, onComplete }: TaskProps) => {
  return (
    <div className="task" style={{ backgroundColor: status === "completed" ? '#D7FFE4' : "#fff" }}>
        <div className="task-info">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

        <div className="task-actions">
            <button onClick={() => onComplete(id)}>Done</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    </div>
  )
}

export default Task