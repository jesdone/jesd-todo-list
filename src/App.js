import React, {useState, useEffect} from "react";
import "./App.css"
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import CustomInput from "./components/CustomInput";


function App(){

  //State
  const [formData, setFormData] = useState({
    title: "",
    duedate:"",
    description:"",
  });
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
    //Use Effect
    useEffect(() => {
      filterHandler();
      saveLocalTodos();
    }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default: 
      setFilteredTodos(todos);
      break;
    }
  }

  const handleInputChange = (e) => {
    const {title, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [title]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  //Save to Local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    };
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      }else{
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      }
    };

return(
  <>
  <div className="App"/>
  <header>
  <h1>Task List</h1>
  </header>
<Form 
formData={formData}
todos={todos} 
setTodos={setTodos} 
setFormData={setFormData}
setStatus={setStatus}
handleInputChange={handleInputChange}
handleSubmit={handleSubmit}
/>
{/* <CustomInput /> */}

<TodoList 
formData={formData}
setFormData={setFormData}
filteredTodos={filteredTodos} 
setTodos={setTodos} 
todos={todos}
/>
<div/>
</>
  )
  }

export default App;