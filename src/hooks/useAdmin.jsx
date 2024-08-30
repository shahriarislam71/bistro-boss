import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('Access-token')
    const {refetch, data:isAdmin=''} = useQuery({
        queryKey : ['admin',user?.email],
        queryFn : async()=>{
            const data = await fetch(`https://bistro-boss-server-mauve-nine.vercel.app/user/admin/${user?.email}`,{
                headers : {
                    authorization : `bearer ${token}`
                }
            })
            return data.json()
        }
    })
    return {refetch,isAdmin}
};

export default useAdmin;