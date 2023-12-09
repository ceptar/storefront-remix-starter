import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import type { FormEvent } from 'react';

export const CheckoutForm = ({ orderCode }: { orderCode: string }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: location.origin + `/checkout/confirmation/${orderCode}`,
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      // Handle success scenario
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mb-4 w-full">
        <PaymentElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#32325d',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#fa755a',
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="bg-primary-500 hover:bg-primary-700 text-discogray py-2 px-8 uppercase tracking-[0.25em]"
      >
        Submit
      </button>
    </form>
  );
};