import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';


const Home = () => {
  const todoInput = useRef()
  const todoInputEdit = useRef()
  const [data, setData] = useState([])
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(false)
  const addToodo = (evt) => {
    evt.preventDefault()
    axios.post("http://localhost:7777/posts", {
      name: todoInput.current.value
    }).then(res => {
      if (res.status === 201) {
        getTodos()
        todoInput.current.value = ""
      }
    })
      .catch(err => console.error(err))
  }
  const getTodos = () => {
    axios.get("http://localhost:7777/posts")
      .then(res => {
        if (res.status === 200) {

          setData(res.data)
        }
      })
      .catch(err => console.error(err))
  }
  useEffect(() => {
    getTodos()
  }, [])
  const btnDel = (id) => {
    axios.delete(`http://localhost:7777/posts/${id}`).then(res => {
      if (res.status === 200) {
        getTodos()
      }
    })
      .catch(err => console.error(err))
  }
  const editToodo = (evt) => {
    evt.preventDefault()
    axios.put(`http://localhost:7777/posts/${id}`,{
      name : todoInputEdit.current.value
      }).then(res => {
        if (res.status === 200) {
          getTodos()
          setEdit(false)
          todoInputEdit.current.value = ""
        }
      })
        .catch(err => console.error(err))
  }
  const btnEdit = (id) => {
    setEdit(true)
    setId(id)
  }
  return (
    <>
      <div className=''>
        <form onSubmit={addToodo} className='input-group w-25 mx-auto mt-5'>
          <input ref={todoInput} className='form-control' type="text" />
          <button className='btn btn-info' type='submit'>add todo</button>
        </form>
      </div>
      <div className=''>
        <form onSubmit={editToodo} className={edit? 'input-group w-25 mx-auto mt-5':"d-none"} >
          <input ref={todoInputEdit} className='form-control' type="text" />
          <button className='btn btn-info' type='submit'>edit todo</button>
        </form>
      </div>
      <div className='w-50 mx-auto mt-5'>
        
        {
          data.map((item, index) => <div key={index} className=" border justify-content-between d-flex">
               {
            console.log(item)
          }
          <p>{item.name}</p>
       
          <button onClick={()=> btnDel(item.id)}>del</button>
          <button onClick={()=> btnEdit(item.id)}>edit</button>
        </div> )
     
        }

      </div>
    </>
  );
};

export default Home;