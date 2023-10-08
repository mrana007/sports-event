import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { signOut, updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, email, password);

        // reset error & success
        setRegisterError('');
        setSuccess('');
        const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if(!passwordValidation.test(password)){
            setRegisterError(toast("Password required must be minimum six characters, at least one uppercase letter, one lowercase letter and one special character."));
            return;
        }

        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            setSuccess(toast.success("User created successfully"))
            signOut();
            // navigate("/login");

            // update profile
            updateProfile(result.user,{
                displayName: name,
                photoURL: photo
            })
            .then(result =>{
                console.log(result.user);
            })
            .catch(error =>{
                console.error(error);  
            })

        })
        .catch(error => {
            console.error(error);
            setRegisterError(toast.error("User already registered"));
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
                    <span className="label-text">Your Photo</span>
                </label>
                    <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
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
            <div className="relative input input-bordered">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="pt-2" required />
            <span className="absolute top-3 right-3" onClick={ () => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </span>
            </div>
            </div>
            <div className="form-control mt-6">
            <button className="btn bg-fuchsia-700 normal-case text-white font-semibold text-2xl">Register</button>
            </div>
            </form>
            <p className="text-center mt-4 pb-4">Already Have An Account ? <Link to='/login' className="font-extrabold text-blue-600">Login</Link>
            </p>
            {
                registerError && <p className="text-red-500 text-center">{registerError}</p>
            }
             {
                success && <p className="text-green-400 text-center">{success}</p>
            }     
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Register;