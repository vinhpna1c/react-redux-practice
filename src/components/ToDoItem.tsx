import { ITodo } from "../models/todo.d"

type ToDoItemProps = {
    todo: ITodo;
    onDone?: () => void;
    onRemove?: () => void;
}

export default function ToDoItem(props: ToDoItemProps) {
    const { todo, onDone, onRemove } = props;
    return (
        <div>
            {todo.id} - {todo.title} - Status: {todo.status}
            <button onClick={onDone}>Done</button>
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}