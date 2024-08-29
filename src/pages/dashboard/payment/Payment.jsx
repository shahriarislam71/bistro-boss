import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
import useCart from "../../../hooks/useCart";

const Payment = () => {
    const {cart} = useCart()
    console.log(cart)
    const totalPrice = cart?.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(totalPrice.toFixed(2))
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_GATEWAY)
    return (
        <div className="w-full text-center px-[150px]">
            <h1 className="text-xl font-bold">Pay More</h1>
            <Elements stripe={stripePromise}>
                <StripeCheckoutForm cart={cart} price={price}></StripeCheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;