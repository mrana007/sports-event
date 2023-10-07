import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const Login = () => {

    const {login, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        login(email, password)
        .then(result => {
            console.log(result.user);

            navigate(location?.state ? location.state : '/');

        })
        .catch(error =>{
            console.error(error);
        })
    }

    const handleGoogleSignIn =() =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div>
            <div className="card flex-shrink-0 bg-fuchsia-200 w-full max-w-sm shadow-2xl mx-auto mb-8">
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
          <button className="btn bg-fuchsia-700 normal-case text-white font-semibold text-2xl">Login</button>
        </div>
            </form>
            <div className="pt-4 pl-12">
          <button onClick={handleGoogleSignIn} className="btn btn-outline text-fuchsia-600 normal-case font-semibold text-2xl">Google</button>
        </div>
            <p className="text-center mt-4 pb-4">Do not Have An Account ? <Link to='/register' className="font-extrabold text-blue-600">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;