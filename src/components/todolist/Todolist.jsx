import {Link} from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './todolist.css'

export default function Todolist(){
    let[todos,setTodos]= useState([{task:"Task", id : uuidv4(), isDone:false}]);
    let[newtodo, setNewtodo]=useState("");

let AddnewTask =()=>{
    setTodos((prevTodos)=>{
        return [...prevTodos,{ task:newtodo, id:uuidv4(), isDone:false }]
    });
setNewtodo(""); 
};
    
 
let updateTodoValue= (event) => {
    setNewtodo(event.target.value);
}

let deleteTodo=(id)=>{
    setTodos((prevTodos)=>todos.filter((todo)=>todo.id !=id));
};

let upperCaseAll=()=>{
    setTodos((todos)=>
    todos.map((todo)=>{
        return{
            ...todo,
            task: todo.task.toUpperCase(),
        };
    })
);
};

let markAsDone=(id)=>{
    setTodos((prevTodo)=>
       prevTodo.map((todo)=>{
          if(todo.id==id){
             return{
                ...todo,
                isDone:true,
                   };
                        }
          else{
             return todo;
              } 
            }
                   
        ))}

let markAllAsDone =()=>{
     setTodos((todos)=>
        todos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
                  };
            })
        );
        };

    return (
<div className="todomain"> 
    <div className='todotitle'>
        <div>
        <span id='h1'>Ready to Tackle Your Tasks? </span>
        </div>
        <br></br>
        <div>
        <span id='h2'>Let's Begin!</span>
        </div>
    </div>
    <div className="todonavbar">
        <Link to="/" className='todobacktohome'>
           <span>Back To Home</span>
        </Link>
    </div>
    

    <br></br><br></br>
    <div className='todoinput'> 
        <input 
            placeholder="Add a task"
            value={newtodo}
            onChange={updateTodoValue}>
        </input>
    </div> 

    <div className='addbutton'>
        <button id='addbutton' onClick={AddnewTask}>Add Task</button>
    </div>
    
    <div className='todotask'>
        <p>Your To-Do Task Are Here</p>
    </div>

    <div className='tasklist' >
        <ul className='task'>
            {todos.map((todo)=>
                ( 
                   <li key={todo.id}>
                       <div className='task'>
                   <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                       
                   &nbsp; &nbsp; &nbsp;
                       
                   <button  className='deletebutton button' onClick={()=>deleteTodo(todo.id)}>Delete</button>
                   &nbsp; &nbsp; 
                   <button  className='donebutton button'onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                       </div>
                   </li>
                ))}
        </ul>
    </div>

    

    

    
   
    
    <div className='lastbutton'>
        <div className='lastbutton'>
            <button onClick={upperCaseAll}>Upper Case ToDos</button>
        </div>
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
        <div className='lastbutton'>
            <button onClick={markAllAsDone}>Mark All As Done</button>
        </div>
    </div>
    

</div>
    );
}

 