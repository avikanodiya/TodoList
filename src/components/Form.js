import React from 'react'

const Form = ({ inputText, setInputText, toDo, setToDo, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setToDo([
            ...toDo, { text: inputText, completed: false, id: new Date().getTime().toString() }
        ]);
        setInputText("");

    };

    const statusHandler = (e) => {
        setStatus(e.target.value);

    }

    return (

        <form>
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
            <button className="todo-button" type="submit" onClick={submitHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Pending</option>
                </select>
            </div>
        </form>


    )
}

export default Form
