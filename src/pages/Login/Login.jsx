import { Link } from "react-router-dom";



const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
    }

    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mb-8">
            <h2 className="text-3xl my-6 text-center font-bold">Login your account</h2>
            <form onSubmit={handleLogin} className="w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success normal-case text-white font-semibold text-2xl">Login</button>
        </div>
            </form>
            <p className="text-center mt-4 pb-4">Do not Have An Account ? <Link to='/register' className="font-extrabold text-blue-600">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;