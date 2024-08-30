import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const ItemsList = ({item}) => {
    const {user} = useContext (AuthContext)
    const {refetch} = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const handleOrders =(items)=>{
        console.log(items)
        console.log(user.email)
        const orderedItems = {orderId : items._id, name : items.name, price : items.price, image : items.image, category : items.category, email : user.email}
        if(user && user.email){
            fetch('https://bistro-boss-server-mauve-nine.vercel.app/carts',{
                method : "POST",
                headers : {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify(orderedItems)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    refetch() //here we are calling refetch for updating the state of the cart. Normally, if we do not call refetch and if we click on the add to cart button, we will see that that the cart state is not updating.And then after reloading the page it will update.refech works like the dependencies of the useEffect.
                    Swal.fire({
                        title: "Good job!",
                        text: "data is succesfully inserted!",
                        icon: "success"
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "Opps?",
                text: "You need to login first!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state :{from:location}})
                }
              })
        }
    }
    return (
        <>
            <div style={{background: 'var(--Dark-07, #F3F3F3)'}} className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={item.image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div onClick={()=>handleOrders(item)} className="card-actions">
                        <button style={{background: 'var(--Dark-07, #F3F3F3)'}} className="border-[#BB8506] px-[30px] py-[20px] border-b-[3px] text-[#BB8506] rounded-[8px]">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemsList;