import React from 'react';

const TodoList = ({ todos, toggleComplete }) => {
    return(
        <div>
            {todos.map(todo => {
                return(
                    <p key={todo.id} onClick={()=>toggleComplete(todo)}>{todo.item}</p>
                )
            })}
        </div>
    )
}

export default TodoList