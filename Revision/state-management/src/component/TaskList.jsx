import { useState } from "react";

const initialTask = [
    { id: 1, title: "To Study At Night", done: true },
    { id: 2, title: "To Sleep early", done: false },
    { id: 3, title: "To Get Up Early", done: false },
];

const TaskItems = ({ task }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(task.title);

    const handleEdit = () => {
        setEditing(!editing);
    };

    return (
        <div>
            {editing ? (
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
            ) : (
                <span>{text}</span>
            )}
            &nbsp;
            <button onClick={handleEdit}>{!editing ? "Edit" : "Save"}</button>
            &nbsp;
            <button>Delete</button>
        </div>
    );
};

export default function TaskList() {
    const [tasks, setTasks] = useState(initialTask);

    return (
        <div>
            {tasks.map((task) => (
                <TaskItems key={task.id} task={task} />
            ))}
        </div>
    );
}
