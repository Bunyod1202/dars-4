import axios from 'axios'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { TokenRegisterAdd } from '../redux/token/tokenActions'
import { UserRegisterAdd } from '../redux/user/userActions'

export const Register = () => {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const EmailRef = useRef()
  const passwordRef = useRef()
 const navigate = useNavigate()
  const countOfMac = useSelector((state) => state)

  console.log(countOfMac)

  const dispatch = useDispatch()

  const addUser = (evt) => {
    evt.preventDefault()

    axios.post("http://localhost:7777/users/register", {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: EmailRef.current.value,
      password: passwordRef.current.value
    })
      .then(res => {

        if (res.status === 201) {
          navigate("/")
          localStorage.setItem("token", res.data.accessToken)
          localStorage.setItem("user", JSON.stringify(res.data.user))
          dispatch(TokenRegisterAdd({ token: res.data.accessToken, }))
          dispatch(UserRegisterAdd({ user: res.data.user, }))
        }
      }
      )
  }
  return (
    <div className="">
      <div className="w-25 mx-auto mt-5 card p-3">
        <h2>Register</h2>
        <form onSubmit={addUser}>
          <input className='form-control mb-2' placeholder='first name' type="text" ref={firstNameRef} name='firs_name' />
          <input className='form-control mb-2' placeholder='last name' type="text" ref={lastNameRef} name='last_name' />
          <input className='form-control mb-2' placeholder='email' type="email" ref={EmailRef} name='email' />
          <input className='form-control mb-2' placeholder='password' type="password" ref={passwordRef} name='password' />
          <div>
          </div>
          <button className='btn btn-info' type='submit' >Register</button>
        </form>
      </div>
    </div>
  )
}
