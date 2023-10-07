import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-fuchsia-200 mx-auto mb-8">
                <h2 className="text-3xl my-6 text-center font-bold">Register your account</h2>
            <form onSubmit={handleRegister} className="w-3/4 mx-auto">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                </div>
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
            <button className="btn bg-fuchsia-700 normal-case text-white font-semibold text-2xl">Register</button>
            </div>
            </form>
            <p className="text-center mt-4 pb-4">Already Have An Account ? <Link to='/login' className="font-extrabold text-blue-600">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;