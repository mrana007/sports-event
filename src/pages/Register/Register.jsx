import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import {  updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import swal from 'sweetalert';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, logOut} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if(!passwordValidation.test(password)){

            swal("Oops!", "Password required must be minimum six characters, at least one uppercase letter, one lowercase letter and one special character", "error");
            
            // toast.warning("Password required must be minimum six characters, at least one uppercase letter, one lowercase letter and one special character.");
            return;
        }

        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            swal("Congrats!", "User created successfully!", "success");
            
            // toast.success("User created successfully");
            logOut();

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
            swal("Warning!", "User already registered", "warning");
            // toast.warning("User already registered");
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
            </div>
            {/* <ToastContainer/> */}
        </div>
    );
};

export default Register;