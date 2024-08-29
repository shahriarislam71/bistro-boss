import './Errorpage.css'
import errorImage from '../../../../src/assets/others/404.gif'
import { Link } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>404</title>
            </Helmet>
            <img src={errorImage} alt="" />
            <Link to={'/'}><button className='background text-white block mx-auto py-[16px] pe-[16px] ps-[23px]'><div className='flex items-center'><p className='mr-[12px] text-[20px] font-bold'>Back To Home</p><GoHome className='w-[24px] h-[24px]'/></div></button></Link>
        </div>
    );
};

export default ErrorPage;