import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import './Additems.css'
import { useQuery } from '@tanstack/react-query';
import useMenu from '../../../hooks/useMenu';
import Swal from 'sweetalert2';

const uploadedImage = import.meta.env.VITE_IMAGE_KEY
const AddItems = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [catagoriesData] = useMenu()
    console.log(catagoriesData)
    const token = localStorage.getItem('Access-token')

    const imageUrl = `https://api.imgbb.com/1/upload?key=${uploadedImage}`
    const onSubmit = data => {
        console.log(data)
        const formdata = new FormData()
        formdata.append('image', data.image[0])

        fetch(imageUrl, {
            method: "POST",
            body: formdata
        })
            .then(res => res.json())
            .then(imageLink => {
                console.log(imageLink)
                if (imageLink.success) {
                    const imgURL = imageLink.data.display_url
                    const { name, recipe, category, price } = data
                    const formData = { name, recipe, image: imgURL, category, price: parseFloat(price) }
                    console.log(formData)
                    fetch('http://localhost:5000/menu', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `bearer ${token}`
                        },
                        body: JSON.stringify(formData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            if(result.insertedId){
                                reset()
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your work has been saved",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            
                        })
                }
            })
    };
    console.log(errors)
    console.log(uploadedImage)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Add Items</title>
            </Helmet>
            <div className='itemsbackground'>
                <form onSubmit={handleSubmit(onSubmit)} className='p-[50px]'>
                    <label className='text-[20px] font-bold' htmlFor="name">Recipe name*</label><br />
                    <input className='py-[24px] ps-[23px] rounded mt-[16px] md:w-[892px] w-full border-2 mb-[24px]' type="text" placeholder='Recipe Name' {...register("name", { required: true, maxLength: 80 })} name="name" id="name" />
                    <div className='grid grid-cols-2 gap-[24px]'>
                        <div><label className='text-[20px] font-bold' htmlFor="category">Category*</label><br />
                            <select defaultValue={'Pick One'} {...register("category", { required: true })} className='py-[24px] ps-[23px] rounded mt-[16px]  w-full border-2 mb-[24px]'>
                                <option disabled >Category</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>popular</option>
                                <option>soup</option>
                                <option>dessert</option>
                                <option>drinks</option>
                            </select></div>
                        <div><label className='text-[20px] font-bold' htmlFor="price">Price*</label><br />
                            <input className='py-[24px] ps-[23px] rounded mt-[16px] w-full border-2 mb-[24px]' type="number" placeholder='Recipe Price' {...register("price", { required: true })} name="price" id="price" />
                        </div>
                    </div>
                    <label className='text-[20px] font-bold' htmlFor="details">Recipe Details*</label><br />
                    <textarea className='py-[24px] ps-[23px] rounded mt-[16px] w-full border-2 mb-[24px]' id='area' name='area' rows='4' cols='50' placeholder='write details' {...register("recipe", { required: true })} required></textarea>
                    <label className='text-[20px] font-bold' htmlFor="image">Image*</label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full my-[20px]" required />
                    <input className='background p-[16px] cursor-pointer rounded' type="submit" value="Add items" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;