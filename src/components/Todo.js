import React, { useState } from 'react';

const Todo = ({ todo, todos, setTodos }) => {
    const [editedTodo, setEditedTodo] = useState({ ...todo });
    const [isEditing, setIsEditing] = useState(false);

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        }));
    };

    const editHandler = () => {
        setIsEditing(true);
    };

    const saveEditHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item,
                    ...editedTodo
                };
            }
            return item;
        }));
        setIsEditing(false);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedTodo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='todo'>
            {isEditing ? (
                <div>
                    <input type="text" value={editedTodo.text} name="text" onChange={handleEditChange} />
                    <input type="text" value={editedTodo.dueDate} name="dueDate" onChange={handleEditChange} />
                    <input type="text" value={editedTodo.description} name="description" onChange={handleEditChange} />
                </div>
            ) : (
                <div>
                    <div className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.text}</div>
                    <div>{todo.description}</div>
                    <div>{todo.dueDate}</div>
                </div>
            )}
            <button onClick={completeHandler} className='complete-btn'>
                <i className={`fas fa-check ${todo.completed ? "completed" : ''}`}></i>
            </button>
            {isEditing ? (
                <button onClick={saveEditHandler} className='edit-btn'>
                    <i className='fas fa-save'></i>
                </button>
            ) : (
                <button onClick={editHandler} className='edit-btn'>
                    <i className='fas fa-edit'></i>
                </button>
            )}
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};

export default Todo;















// import React from 'react';

// const Todo = ({text, todo, todos, setTodos}) => {
//     //events
//     const deleteHandler = () => {
//         setTodos(todos.filter((el) => el.id !== todo.id))
//     }
//     const completeHandler = () => {
//         setTodos(todos.map(item => {
//             if(item.id === todo.id){
//                 return {
//                     ...item, completed: !item.completed
//                 }
//             }
//                 return item;
//         })
//         );
//     };
//     const editHandler = (id) => {
//         setTodos(
//           todos.map((todo) =>
//             todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
//           )
//         );
//       }


//   return (

//     <div className='todo'>
//         <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
//         <button onClick={completeHandler} className='complete-btn'>
//             <i className='fas fa-check'>
//             </i></button>
//         <button onClick={deleteHandler} className='trash-btn'>
//             <i className='fas fa-trash'>
//             </i></button>
//         <button onClick={editHandler} className='edit-btn'><i className='fas fa-edit'>
//             </i></button>
//     </div>

//   )
// }

// export default Todo;