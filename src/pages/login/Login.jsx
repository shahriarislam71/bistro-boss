import { useContext, useEffect, useState } from 'react';
import '../login/Login.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [disabled, setdisabled] = useState(true)
    const { signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const form = location.state?.from?.pathname || '/'
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handlecaptcha = (e) => {
        const captchaValue = e.target.value
        console.log(captchaValue)
        if (validateCaptcha(captchaValue)) {
            setdisabled(false)
        }
    }
    const handleForm = (e) => {
        e.preventDefault()
        const emailFieldValue = e.target.email.value
        const passwordFieldValue = e.target.password.value
        console.log(emailFieldValue, passwordFieldValue)
        signIn(emailFieldValue, passwordFieldValue)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                Swal.fire({
                    title: "Good job!",
                    text: "You Successfully Logged In!",
                    icon: "success"
                });
                navigate(form)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // google sign In 
    const handleSignInwithGoogle = () =>{
        googleSignIn()
        .then((userCredential)=>{
            console.log(userCredential.user.displayName)
            const user = userCredential.user
            const usersValue = {
                namefieldvalue : user.displayName,
                photofiledValue : user.photoURL,
                emailFieldValue : user.email
            }
            fetch('http://localhost:5000/user', {
                method: "POST",
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify(usersValue)
            })
                .then(res => res.json())
                .then(data => {
                    Swal.fire({
                        title: "Good job!",
                        text: "You Successfully registered!",
                        icon: "success"
                    });
                    navigate(form)
                })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className='Loginbackground py-[100px]'>
            <div className='flex max-w-[1300px] mx-auto insideLogin pt-[195px] ps-[100px]  pb-[282px]'>
                <div className='setbackgroundImage h-[455px] w-[600px] mr-[196px] '>

                </div>
                <div>
                    <form onSubmit={handleForm} action="/login" method="post">
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input className='' type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input className='' type="password" id="password" name="password" required />
                        </div>
                        <div className="form-group mt-5">
                            <LoadCanvasTemplate />
                            <input onBlur={handlecaptcha} className='' type="text" id="text" name="text" required />
                        </div>
                        <button disabled={disabled} type="submit" className={`login-button  py-[15px] px-[90px] text-white mt-[20px] ${disabled ? 'bg-slate-600' : 'button'}`}>Login</button>
                    </form>
                    <p>NEW HERE? <span className='text-[#BB8506] text-2xl font-[700]'><Link to={'/register'}>Create a new account</Link></span></p>
                    <h1 className='text-center mt-[20px] text-2xl font-bold'>OR sign in with</h1>
                    <div className='flex items-center justify-center gap-5 mt-5'>
                        <FaGoogle onClick={handleSignInwithGoogle} className='w-[52px] cursor-pointer h-[52px] p-[14px] border-2 border-[#444] rounded-full '></FaGoogle>
                        <FaFacebook className='w-[52px] cursor-pointer h-[52px] p-[14px] border-2 border-[#444] rounded-full '></FaFacebook>
                        <FaGithub className='w-[52px] cursor-pointer h-[52px] p-[14px] border-2 border-[#444] rounded-full '></FaGithub>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;