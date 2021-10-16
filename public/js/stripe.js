/* eslint-disable */
import { showAlert } from './alerts';
import axios from 'axios';
const stripe = Stripe('pk_test_51Jk4T9GYWqoX5f46AjlorJSmK2I8Lq3YXMbqMBgx7ePgzqj1VEzEpueYjeNCrrmE1o1JBrk7zI8nVdYdrdTGW8LD00YvKVN53H');

export const bookTour = async tourId =>{
    try{
    //1)get checkout session from endpoint(API)

    const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`)
    console.log(session)

    //2)create checkout form + charge credit card
    await stripe.redirectToCheckout({
        sessionId: session.data.session.id
    });


    }catch(err){
        console.log(err);
        showAlert('error', err);
    }


}

