
import { useState } from 'react';

const useTodoState = () => {
    const [todos, setTodo] = useState([]);

    return {
        todos,
        addTodo: (value) => {
            setTodo(() => ([...todos, value]));
        },

        deleteTodo: (todoIndex) => {
            // ---->filter 
            const newTodos = todos.filter((_, index) => { return (todoIndex !== index) })
            setTodo(newTodos);
        }
    }
}

export default useTodoState;

// 这种写法也可以

// export default  () => {
//     const [todos, setTodo] = useState([]);

//     return {
//         todos,
//         addTodo: (value) => {
//             setTodo(() => ([...todos, value]));
//         },

//         deleteTodo: (todoIndex) => {
//             const newTodos = todos.filter((_, index) => { return (todoIndex !== index) })
//             setTodo(newTodos);
//         }
//     }
// }