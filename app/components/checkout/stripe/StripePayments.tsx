import { Elements } from '@stripe/react-stripe-js';
import type { Stripe } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from '~/components/checkout/stripe/CheckoutForm';


const appearance = {
  theme: 'stripe',
  variables: {
    fontWeightNormal: '500',
    borderRadius: '2px',
    colorPrimary: '#f360a6',
    tabIconSelectedColor: '#fff',
    gridRowSpacing: '16px'
  },
  rules: {
    '.Tab, .Input, .Block, .CheckboxInput, .CodeInput': {
      boxShadow: '0px 3px 10px rgba(18, 42, 66, 0.08)'
    },
    '.Block': {
      borderColor: 'transparent'
    },
    '.BlockDivider': {
      backgroundColor: '#ebebeb'
    },
    '.Tab, .Tab:hover, .Tab:focus': {
      border: '0'
    },
    '.Tab--selected, .Tab--selected:hover': {
      backgroundColor: '#f360a6',
      color: '#fff'
    }
  }
};

let _stripe: Promise<Stripe | null>;
function getStripe(publishableKey: string) {
  if (!_stripe) {
    _stripe = loadStripe(publishableKey);
  }
  return _stripe;
}

export function StripePayments({
  clientSecret,
  publishableKey,
  orderCode,
}: {
  clientSecret: string;
  publishableKey: string;
  orderCode: string;
}) {
  const options = {
    // passing the client secret obtained from the server
    clientSecret, appearance,
  };
  const stripePromise = getStripe(publishableKey);

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm orderCode={orderCode} />
    </Elements>
  );
}
