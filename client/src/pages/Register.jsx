import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder='username' />
        <input required type="email" placeholder='email' />
        <input required type="password" placeholder='password' />
        <button>Login</button>
        <span>Do you have an account? <Link to='/Login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register