import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Stripe from "stripe";
const stripe = new Stripe('sk_test_51LdlsTSExNzIHjIgI3hG5Z6vYUqqaIW3G90aORODh5uVH4X69Bof0955zSeGNkWn4XfSxlMcTT4Hi8VePdK1Gygr00ocGzNpza');


export const processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "e-cart",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

export const sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEYS });
});