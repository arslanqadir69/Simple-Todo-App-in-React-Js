import React, {useState} from 'react'

import TodoForm from './TodoForm'

function TodoList(props) {
    
    return (
         <li>{props.text}</li>
    )
}

export default TodoList
