import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import './StripeCheckoutForm.css'

const StripeCheckoutForm = ({ cart, price }) => {
    console.log('cart data', cart)
    console.log(price)
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [Error, setError] = useState('')
    const token = localStorage.getItem('Access-token')
    const [clientsecret, setClientSecret] = useState()
    const [processing, setProcessing] = useState(false)
    const [transaction, setTransaction] = useState('')

    useEffect(() => {
        if (price > 0) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: "POST",
                headers: {
                    'content-type': "application/json",
                    'Authorization': `bearer ${token}`
                },
                body: JSON.stringify({ price: price })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.clientSecret)
                    setClientSecret(data.clientSecret)
                })
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log(card)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
            console.log('error', { error })

        }
        else {
            setError('')
            console.log('[paymentMethod]', paymentMethod)

        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientsecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'annonymus',
                        name: user?.displayName || 'annonymus'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransaction(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                status: "service pending",
                quantity: cart.length,
                items: cart.map(item => item._id),
                orderId: cart.map(data => data.orderId),
                itemsName: cart.map(items => items.name)
            }
            fetch('http://localhost:5000/payment', {
                method: "POST",
                headers: {
                    'content-type': "application/json",
                    'Authorization': `bearer ${token}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }
    return (
        <div><form onSubmit={handleSubmit}>
            <CardElement className="border-red-200 border-2"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="bg-[#570DF8] px-[188px] py-[20px] text-white text-lg mt-[64px] rounded" type="submit" disabled={!stripe || !clientsecret || processing}>
                Pay
            </button>
        </form>
            {Error ? <h1 className="text-red-600">{Error}</h1> : ''}
            {transaction ? <h1>Transaction Id : {transaction}</h1> : ""}
        </div>
    );
};

export default StripeCheckoutForm;