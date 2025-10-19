import React from 'react'
import { Link } from 'react-router'

export const Register = () => {
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Register Now!</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            
            {/* Name  */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Please Enter Your Name" />

            {/* Photo URL  */}
            <label className="label">Photo URL</label>
            <input type="url" className="input" placeholder="Photo URL" />

            {/* email  */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password  */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <div><a className="link link-hover">Forgot password?</a></div>
            <p className='font-semibold text-center pt-5'>Already Have An Account? <Link to={'/auth/login'} className='text-secondary'>LogIn</Link></p>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
      </div>
    </div>
  )
}
