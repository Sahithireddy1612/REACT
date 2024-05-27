import { useEffect, useState } from "react"

const UseEffectTodo=()=>{
    const [count,setCount]=useState(0);
    const [todo,setTodo]=useState([]);



    useEffect(()=>{


        console.log(`count is now ${count}`);
        console.log(`Todo list is now ${todo.length}`)

    },[count,todo]);


const addTodo=()=>{
    const newTodo=`todo ${todo.length+1}`;
    setTodo((prevTodo)=>[...prevTodo,newTodo]);

};
return(
<div>
    <h1>count:{count}</h1>
    <h3>NUMBER OF TODOS</h3>
    <p>{todo.length}</p>
    <button onClick={()=>setCount((prevCount)=>prevCount+1)}>
    click to count
    </button>
    <button onClick={addTodo}>Add Todo</button>
    <ul>
        {
            todo.map((todo,index)=> (
                <li key={index}>{todo}</li>

            ))
        }
    </ul>

</div>


);

}

export default UseEffectTodo






