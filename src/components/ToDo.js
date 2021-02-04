import React from 'react'

const ToDo = ({ text, id, toDo, setToDo, todo }) => {
    const deleteHandler = () => {
        setToDo(toDo.filter((el) => el.id !== todo.id));

    }
    const commonHandler = () => {
        setToDo(toDo.map((item) => {
            if (item.id == todo.id) {
                return { ...item, completed: !item.completed }

            }
            return item;

        }))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className='common-btn' onClick={commonHandler}><i className="fas fa-check"></i></button>
            <button className='trash-btn' onClick={deleteHandler}><i className="fas fa-trash"></i></button>

        </div>
    )
}

export default ToDo
