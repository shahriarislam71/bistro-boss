import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const { createUser,googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleForm = (e) => {
        e.preventDefault()
        const namefieldvalue = e.target.name.value
        const photofiledValue = e.target.url.value
        const emailFieldValue = e.target.email.value
        const passwordFieldValue = e.target.password.value
        const usersValue = { namefieldvalue, photofiledValue, emailFieldValue }
        console.log(emailFieldValue, passwordFieldValue)
        createUser(emailFieldValue, passwordFieldValue)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                // this fetch is used for storing farther information of the user  
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
                        navigate('/')
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // handle sign in with google 
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
                    navigate('/')
                })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <>
            <div className='Loginbackground py-[100px]'>
                <div className='grid grid-rows-1 grid-cols-2 gap-10 max-w-[1300px] mx-auto insideLogin pt-[195px] ps-[100px]  pb-[282px]'>
                    <div className='setbackgroundImage h-[455px] w-[600px] mr-[196px] '>

                    </div>
                    <div>
                        <form className='pe-10' onSubmit={handleForm} action="/login" method="post">
                            <div className="form-group mt-5 ">
                                <label htmlFor="name">Name:</label>
                                <input className='' type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group mt-5">
                                <label htmlFor="name">Photo Url</label>
                                <input type="url" name="url" id="url" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input className='' type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input className='' type="password" id="password" name="password" required />
                            </div>
                            <button type="submit" className={`login-button  py-[15px] px-[90px] text-white mt-[20px] button`}>Register</button>
                        </form>
                        <p>Already have an account? <Link to={'/login'}><p className='uppercase text-[#BB8506]'>Create a new account</p></Link></p>
                        <h1 className='text-center mt-[20px] text-2xl font-bold'>OR sign in with</h1>
                        <div className='flex items-center justify-center gap-5 mt-5'>
                            <FaGoogle onClick={handleSignInwithGoogle} className='w-[52px] cursor-pointer h-[52px] p-[14px] border-2 border-[#444] rounded-full '></FaGoogle>
                            <FaFacebook className='w-[52px] cursor-pointer h-[52px] p-[14px] border-2 border-[#444] rounded-full '></FaFacebook>
                            <FaGithub className='w-[52px] cursor-pointer h-[52px] p-[14px] border-2 border-[#444] rounded-full '></FaGithub>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Register;