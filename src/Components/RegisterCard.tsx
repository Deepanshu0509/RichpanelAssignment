import React from 'react'
import NameField from './NameField'
import EmailField from './EmailField'
import PasswordField from './PasswordField'

const RegisterCard = () => {
    return (
        <div className='border max-w-96 flex flex-col items-center rounded-3xl p-6'>
            <h1 className='text-lg font-semibold m-7'>Create Account</h1>
            <NameField />
            <EmailField />
            <PasswordField />
            <div>
                <label htmlFor="rememberMe">
                    <input type="checkbox" className='mr-2' name='rememberMe' id='rememberMe' />Remember me
                </label>
            </div>
            <button className='bg-blue-800 text-white p-2 m-2 w-72 rounded-md'>Sign Up</button>
            <span className='font-12'>Already have an account? <a href='#' className='text-blue-950'>Login</a></span>
        </div>
    )
}

export default RegisterCard
