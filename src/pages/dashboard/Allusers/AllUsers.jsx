import { useQuery } from "@tanstack/react-query";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import ErrorPage from "../../shared/errorPage/ErrorPage";


const AllUsers = () => {
    const token = localStorage.getItem('Access-token')
    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user', {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        }
    })
    console.log(user)
    const handleMakingAdmin = (user) => {
        fetch(`http://localhost:5000/user/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount === 1) {
                    refetch()
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
    // TODO- delete user from ui
    const handleDelete = (user) => {

    }
    return (
        <div>
            {
                user?.error === true ? <ErrorPage></ErrorPage> : <><h1 className="text-center text-2xl font-bold">Total user : {user.length}</h1>
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
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    user?.map((users, index) => <tr key={users._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            {users.namefieldvalue}
                                        </td>
                                        <td>
                                            {users.emailFieldValue}
                                        </td>
                                        <td>
                                            {
                                                users.role === 'admin' ? 'admin' : <button onClick={() => handleMakingAdmin(users)} className='bg-[#B91C1C] p-4 rounded text-white cursor-pointer'><MdAdminPanelSettings className='w-[24px] h-[24px]' /></button>
                                            }
                                        </td>
                                        <th>
                                            <button onClick={() => handleDelete(users)} className='bg-[#B91C1C] p-4 rounded text-white cursor-pointer'><RiDeleteBin6Line className='w-[24px] h-[24px]' /></button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>

                        </table>
                    </div></>
            }
        </div>
    );
};

export default AllUsers;