import axios from 'axios'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { TokenRegisterAdd } from '../redux/token/tokenActions'
import { UserRegisterAdd } from '../redux/user/userActions'

export const Login = () => {
  const EmailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const countOfMac = useSelector((state) => state)

  console.log(countOfMac)

  const dispatch = useDispatch()

  const addUser = (evt) => {
    evt.preventDefault()



    axios.post("http://localhost:7777/login", {
      email: EmailRef.current.value,
      password: passwordRef.current.value
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.accessToken)
          localStorage.setItem("user", JSON.stringify(res.data.user))
          dispatch(TokenRegisterAdd({ token: res.data.accessToken, }))
          dispatch(UserRegisterAdd({ user: res.data.user, }))
          navigate("/") 
        }
      }
      )
  }
  return (
    <div className="">
      <div className="w-25 mx-auto mt-5 card p-3">
        <h2>Login</h2>
        <form onSubmit={addUser}>
          <input className='form-control mb-2' placeholder='email' type="email" ref={EmailRef} name='email' />
          <input className='form-control mb-2' placeholder='password' type="password" ref={passwordRef} name='password' />
          <div>
          <Link to="/register">registe</Link>
         </div>
          <button className='btn btn-info' type='submit' >Login</button>
        </form>
      </div>
    </div>
  )
}
