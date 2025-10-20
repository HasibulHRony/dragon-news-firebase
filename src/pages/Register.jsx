import React, { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'

export const Register = () => {

  const { createUser, user, setUser } = use(AuthContext)

  const handleRegister = (event) => {
    event.preventDefault()
    const name = event.target.name.value;
    const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log({ name, photoUrl, email, password })
    createUser(email, password)
    .then(res=>{
      setUser(res.user)
    })
    .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
    });

  }

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Register Now!</h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">

            {/* Name  */}
            <label className="label">Name</label>
            <input name='name' type="text" className="input" placeholder="Please Enter Your Name" required />

            {/* Photo URL  */}
            <label className="label">Photo URL</label>
            <input name='photoUrl' type="url" className="input" placeholder="Photo URL" />

            {/* email  */}
            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />

            {/* password  */}
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            <div><a className="link link-hover">Forgot password?</a></div>
            <p className='font-semibold text-center pt-5'>Already Have An Account? <Link to={'/auth/login'} className='text-secondary'>LogIn</Link></p>
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
