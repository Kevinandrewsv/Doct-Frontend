import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (state === 'Sign Up') {
      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    } else {
      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center bg-gray-50">
      <div className="flex flex-col gap-6 max-w-sm sm:max-w-md mx-auto p-8 border border-gray-200 rounded-xl bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
        <h1 className="text-3xl font-semibold text-gray-700 text-center">{state === 'Sign Up' ? 'Create Account' : 'Login'}</h1>
        <p className="text-center text-sm text-gray-600 mb-4">
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
        </p>

        {state === 'Sign Up' && (
          <div className="w-full mb-4">
            <label htmlFor="name" className="text-sm text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        )}

        <div className="w-full mb-4">
          <label htmlFor="email" className="text-sm text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="w-full mb-6">
          <label htmlFor="password" className="text-sm text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <button type="submit" className="w-full py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          {state === 'Sign Up' ? (
            <p>
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className="text-primary underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Don’t have an account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="text-primary underline cursor-pointer"
              >
                Sign up here
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

export default Login
