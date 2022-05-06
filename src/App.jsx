import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import { Header } from "./components/Header"
import { Home } from './components/home/Home'
import { About } from './components/About/Users'
import { Contact } from './components/contact/contact'

const placeHolder = fetch('https://jsonplaceholder.typicode.com/todos/1 ')
.then(response => response.json())
.then(json => console.log(json))

export function App(){
  return(
    
    <div>
    <Header />
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users' element={<About/>} />
      <Route path='/posts' element={<Contact/>} />
    </Routes>
    
    </div>
    )
  }
  
  
  
  
  
  
  
  
  
  
  
  