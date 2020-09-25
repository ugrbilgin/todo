import React, { useState } from 'react';
import Buttons from './buttons';
import List from './lists';
import '../App.scss';

/*
* {todo:'',checked:false,id:Number(Date.now()).toString(16)}  ---> state yapısı
* add butonuna basınca parenta taşı state i. orda bir array tut.
*/ 



const Form = ()=> {

    const [todoList,setTodoList] = useState([]);

    const [todo,setTodo] = useState({todo:'',checked:false,id:Number(Date.now()).toString(16)});

    const onChange = (e) =>{
        const value = e.target.value;
        setTodo(prev=>({...prev,todo:value}));
    }
    //bunu anla , beni bul arif
    const addTodo = ()=>{
        setTodoList(prev=>([...prev,todo]));
    }

    return (
        
        <div className='form-plain'>
            <h3>Your TODO's {todoList.length} </h3>
            <p>{JSON.stringify(todo,"\t",2)}</p>
            <div className='form-container'>
                <input type="text"  className="todo-input" onChange={onChange}/>     
                <button className='btn btn-primary' onClick={addTodo}> Add </button>
            </div>
            <Buttons/>
            <List list={todoList} />
        </div>
    );
};

export default Form;