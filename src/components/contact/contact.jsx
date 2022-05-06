import { useEffect, useState } from 'react'

export function Contact (){
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setTodos(json))
            .catch((err)=> console.log('err'))
    }, []);

    return(
        <div>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>{todo.title}</li>
                        
                    ))
                }
            </ul>
            
        </div>
    )
}