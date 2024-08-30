import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import TItle from '../../../component/title/TItle';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const { cart, refetch } = useCart()
    console.log(cart)
    const totalPrice = cart?.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = (item) => {
        console.log(item.orderId)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            fetch(`https://bistro-boss-server-mauve-nine.vercel.app/carts/${item._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount === 1) {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
        });
    }

    return (
        <div className='bg-[#F6F6F6] w-full'>
            <Helmet>
                <title>Bistro Boss || MyCart</title>
            </Helmet>
            <div >
                <TItle subheading={'---Hurry Up!---'} heading={'Manage All Items'}></TItle>
            </div>
            <div className='bg-[#F6F6F6] px-[150px]'>
                <div className="overflow-x-auto p-[50px] bg-[#FFF]">
                    <div className='flex justify-between items-center mb-[32px]'>
                        <h1 className=' text-xl font-bold'>Total Items : {cart.length}</h1>
                        <h1 className='text-xl font-bold'>Total Price : ${totalPrice}</h1>
                        <Link to={'/dashboard/payment'}><button className='bg-[#D1A054] px-[17px] py-[14px] rounded'>PAY</button></Link>
                    </div>
                    <table className="table">
                        {/* head */}
                        <thead className=''>
                            <tr className='bg-[#D1A054] text-[16px] font-normal text-white'>
                                <th>
                                    <h1>Count</h1>
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((items, index) => <tr key={items._id}>
                                    <th>
                                        <h1>{index + 1}</h1>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={items.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{items.name}</td>
                                    <td>{items.price}</td>
                                    <th >
                                        <div >
                                            <button onClick={() => handleDelete(items)} className='bg-[#B91C1C] p-4 rounded text-white cursor-pointer'><RiDeleteBin6Line className='w-[24px] h-[24px]' /></button>
                                        </div>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                        {/* foot */}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;