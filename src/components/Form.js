import React, { useState } from 'react';
import CustomInput from './CustomInput';

const Form = ({ todos, setTodos, setStatus }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: ''
    });

    const formDataHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { 
                text: formData.title,
                description: formData.description,
                dueDate: formData.dueDate,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setFormData({
            title: '',
            description: '',
            dueDate: ''
        });
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <main>
            <form onSubmit={submitTodoHandler}>
                <CustomInput
                    onChange={formDataHandler}
                    value={formData.title}
                    type={'text'} 
                    name="title" 
                    placeholder={"Title"}
                />
                <CustomInput
                    onChange={formDataHandler}
                    value={formData.dueDate}
                    type={'text'} 
                    name="dueDate" 
                    placeholder={"Due Date"}
                />
                <CustomInput
                    onChange={formDataHandler}
                    value={formData.description}
                    type={'text'} 
                    name="description" 
                    placeholder={"Description"}
                />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div> 
            </form>
        </main>
    );
};

export default Form;







// import React from 'react'
// import CustomInput from './CustomInput';

// const Form = ({todos, setTodos, inputText, setStatus, formData, setFormData}) => {
//   const formDataHandler =(e) => {
//     setFormData(e.target.value);
    
//   }; 
//   const submitTodoHandler = (e) => {
//     e.preventDefault();
//     setTodos([
//     ...todos,{text: formData, completed: false, id: Math.random() * 1000}
//   ]);
//   setFormData("");
//   };
//   // const handleInputChange = (e) => {
//   //   const {title, value} = e.target;
//   //   setFormData((prevFormData) => ({
//   //     ...prevFormData,
//   //     [title]: value,
//   //   }));
//   // };
//   const statusHandler = (e) => {
//     setStatus(e.target.value);
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   }

//   return (
//     <>
//   <main>
//     <form onSubmit={handleSubmit}>
//       <CustomInput
//         onChange={formDataHandler}
//         value={formData.name}
//         type={'text'} 
//         name="title" 
//         placeholder={"Title"}
//       />
//         <CustomInput
//         onChange={formDataHandler}
//         value={formData.name}
//         type={'text'} 
//         name="duedate" 
//         placeholder={"DueDate"}
//       />
//           <CustomInput
//         onChange={formDataHandler}
//         value={formData.name}
//         type={'text'} 
//         name="description" 
//         placeholder={"Description"}
//       />
//           <button onClick={submitTodoHandler} className="todo-button" type="submit">
//       <i className="fas fa-plus-square"></i>
//     </button>

// {/* <input value={formData} onChange={formDataHandler} type="text" name="title" placeholder="Title" className="todo-input"/>
//     <button onClick={submitTodoHandler} className="todo-button" type="submit">
//       <i className="fas fa-plus-square"></i>
//     </button> */}
//     {/* <input value={formData} onChange={formDataHandler} type="text" name="due_date" placeholder="Due Date" className="todo-input"/>
//     <input value={formData} onChange={formDataHandler} type="text" name="description" placeholder="Description" className="todo-input"/> */}
//     <div className="select">
//       <select onChange={statusHandler} name="todos" className="filter-todo">
//         <option value="all">All</option>
//         <option value="completed">Completed</option>
//         <option value="uncompleted">Uncompleted</option>
//       </select>
//     </div> 
//   </form>
//   </main>
//   </>
//   )
// }

// export default Form