import React from 'react'
import PasswordField from './PasswordField'
import EmailField from './EmailField'

const LoginCard = () => {
  return (
    <div className='border max-h-[400px] max-w-96 flex flex-col items-center rounded-3xl p-6'>
            <h1 className='text-lg font-semibold m-7'>Login to your account</h1>
            <EmailField />
            <PasswordField />
            <div>
                <label htmlFor="rememberMe">
                    <input type="checkbox" className='mr-2' name='rememberMe' id='rememberMe' />Remember me
                </label>   
            </div>
            <button className='bg-blue-800 text-white p-2 m-2 w-72 rounded-md'>Login</button>
            <span className='font-12'>New to MyApp? <a href='#' className='text-blue-950'>Sign Up</a></span>
        </div>
  )
}

export default LoginCard
