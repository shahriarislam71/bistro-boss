import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';


const useCart = () => {
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('Access-token')
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cards', user?.email],
        queryFn: async () => {
            const data = await fetch(`https://bistro-boss-server-mauve-nine.vercel.app/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return data.json()
        },
    })
    return { refetch, cart }

};

export default useCart;