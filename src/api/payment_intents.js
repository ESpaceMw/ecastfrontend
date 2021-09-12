/* eslint-disable import/no-anonymous-default-export */
import Stripe from 'Stripe'

const stripe = new Stripe('pk_test_51JQrrcEO0pnLs1fBbdVLSIYiVPgjmcK2EBOh0cgncJ3FExrtYNmGjOiemlFnNDX1HPeFbMPnIQnKoG1vzw9Cl9ob00skaWd2Qt')

export default async (req, res) => {
    if(req.method === "post"){
        try{
            const { amount } = req.body;

            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: "usd",
                "payment_method_types[]": "card"
            });

            res.status(200).send(paymentIntent.client_secret);
        }
        catch(error){
            res.status(500).json({statusCode: 500, message: error});
        }
    }else{
        res.setHeader("Allow", "POST")
        res.status(405).end("Method not allowed")
    }
}