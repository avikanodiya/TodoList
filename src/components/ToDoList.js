import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ toDo, setToDo, filteredTodo }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodo.map((todo) => (
                    <ToDo
                        setToDo={setToDo}
                        toDo={toDo}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
