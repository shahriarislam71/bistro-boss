import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import {
    useQuery,
  } from '@tanstack/react-query'

const UserHome = () => {
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('Access-token')
    const {data : status ={}, refetch} = useQuery({
        queryKey : ['admin-stats'],
        queryFn : async()=>{
            const data = await fetch('http://localhost:5000/admin-stats',{
                headers : {
                    'authorization' : `bearer ${token}`
                }
            })
            return data.json()
        }
    })
    return (
        <div>
            <h1 className="text-xl font-bold">User : {user.displayName}</h1>
            <div className="grid grid-cols-4">
                <div className="bg-orange-600">
                    <h1>{status.revenew}</h1>
                    <p>Revenew</p>
                </div>
                <div className="bg-orange-600">
                    <h1>{status.user}</h1>
                    <p>Customers</p>
                </div>
                <div className="bg-orange-600">
                    <h1>{status.totalMenu}</h1>
                    <p>Product</p>
                </div>
                <div className="bg-orange-600">
                    <h1>{status.order}</h1>
                    <p>Orders</p>
                </div>
            </div>
        </div>
    );
};

export default UserHome;