import React from 'react';
import useMenu from '../../../hooks/useMenu';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import Swal from 'sweetalert2';

const ManageItems = () => {
    const [catagoriesData, , refetch] = useMenu()
    console.log(catagoriesData)
    const token = localStorage.getItem('Access-token')
    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/menu/${id}`,{
                    method : "DELETE",
                    headers : {
                        "Authorization" : `bearer ${token}`
                    }
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    refetch()
                })
            }
          });
    }
    return (
        <div className='bg-[#F6F6F6] p-[150px] w-full'>
            <div className=' border-2 bg-[#FFF] p-[50px]'>
                <h1>Total Items : {catagoriesData.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Items Image</th>
                                <th>Items Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                catagoriesData.map((data, index) => <tr key={data._id}>
                                    <th>
                                        <p>{index + 1}</p>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={data.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{data.name}</td>
                                    <td>
                                        ${data.price}
                                    </td>
                                    <td><button className='p-[13px] rounded text-white bg-[#D1A054]'><MdSystemUpdateAlt /></button></td>
                                    <th>
                                        <button onClick={()=>handleDelete(data._id)}    className='p-[13px] rounded text-white bg-[#B91C1C]'><RiDeleteBinLine /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;