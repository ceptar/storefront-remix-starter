import { Elements } from '@stripe/react-stripe-js';
import type { Stripe } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from '~/components/checkout/stripe/CheckoutForm';

const appearance = {
  theme: 'stripe',
  variables: {
    colorPrimary: '#15FEE2',
    colorBackground: '#E8FFFD',
    colorText: '#0e0e0e',
    colorDanger: '#FF4D94',
    fontFamily: 'Metropolitano-Light, sans',
    spacingUnit: '0.25em',
    borderRadius: '0px',
    // See all possible variables below
  },
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
    clientSecret,
  };
  const stripePromise = getStripe(publishableKey);

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm orderCode={orderCode} />
    </Elements>
  );
}
