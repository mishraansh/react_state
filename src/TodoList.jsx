import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
export default function TodoList() {
    // let [todos, setTodos] = useState(["sample task"]);
    let [todos, setTodos] = useState([{ task:"sample task", id:uuidv4(), isDone: false }])
    let [newTodo, setNewTodo] = useState("")
    let addNewTask = () => {
        // setTodos([...todos, newTodo])
        //  setTodos([...todos, {task: newTodo, id:uuidv4()}])
        setTodos((prevTodos) =>{ 
           return [...prevTodos, {task: newTodo, id:uuidv4(), isDone: false}]
    })
        setNewTodo("")       
    }
    let deleteTodo = (id) => {
        // setTodos(todos.filter((todo) => todo.id != id));
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id))
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }



    //uppercase

 

    // let upperCaseAll = () => {
    //     setTodos(
    //         todos.map((todo) => {
    //         return {
    //             ...todo,
    //             task: todo.task.toUpperCase(),
    //         }
    //     })
    // )

        

    // }
    

    // let upperCaseAll = () => {
    //     setTodos( (prevTodos) => {
    //        prevTodos.map((todo) => {
    //         return {
    //             ...todo,
    //             task: todo.task.toUpperCase(),
    //         }
    //     })
    // })
    // }

    let upperCaseAll = () => {
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        });
    });
};

//    let UpperCaseOne = () => {
//     setTodos((prevTasks) => {
//         return prevTasks.map((todo) => {
//             if (todo.id == id) {
//                 return {
//                 ...todo,
//                 task: todo.task.toUpperCase(),
//             };
//             } else{
//                 return todo
//             }
//         });
//     });
// };
// ***
// let UpperCaseOne = (id) => {
//     setTodos((prevTasks) => {
//         return prevTasks.map((todo) => {
//             if (todo.id === id) {
//                 return {
//                     ...todo,
//                     task: todo.task.toUpperCase(),
//                 };
//             } else {
//                 return todo;
//             }
//         });
//     });
// };


let markAsDone = (id) => {
    setTodos((prevTasks) => {
        return prevTasks.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                  isDone: true
                };
            } else {
                return todo;
            }
        });
    });
};
    return(
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <br />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    // todos.map((todo) => {
                    //    return <li>{todo}</li>
                    // }) 
                     todos.map((todo) => {
                       return <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                            {todo.task}
                            </span>
                        
                        <button onClick={ () => deleteTodo(todo.id)}>delete</button>
                        <br />
                        <br />
                        <button onClick={() => markAsDone(todo.id)}> markAsDone</button>
                        </li>
                    })  
                }
            </ul>
            <br />
            <br />
            <button onClick={upperCaseAll}> Uppercase</button>
        </div>
    )
}