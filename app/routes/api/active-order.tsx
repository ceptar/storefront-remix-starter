import {
  addItemToOrder,
  adjustOrderLine,
  getActiveOrder,
  removeOrderLine,
  setCustomerForOrder,
  setOrderShippingAddress,
  setOrderShippingMethod,
} from '~/providers/orders/order';
import type { DataFunctionArgs } from '@remix-run/server-runtime';
import { json } from '@remix-run/server-runtime';
import type {
  CreateAddressInput,
  CreateCustomerInput,
  ErrorResult,
  OrderDetailFragment
} from '~/generated/graphql';
import { ErrorCode } from '~/generated/graphql';
import { getSessionStorage } from '~/sessions';
import { shippingFormDataIsValid } from '~/utils/validation';

export type CartLoaderData = Awaited<ReturnType<typeof loader>>;

export async function loader({ request }: DataFunctionArgs) {
  const activeOrder = await getActiveOrder({ request });
  return { activeOrder };
}

export async function action({ request, params }: DataFunctionArgs) {
  const body = await request.formData();
  const formAction = body.get('action');
  let activeOrder: OrderDetailFragment | undefined = undefined;
  let error: ErrorResult = {
    errorCode: ErrorCode.NoActiveOrderError,
    message: '',
  };

  try {
    switch (formAction) {
      case 'setCheckoutShipping':
        if (shippingFormDataIsValid(body)) {
          const shippingFormData = Object.fromEntries<any>(
            body.entries(),
          ) as CreateAddressInput;
          const result = await setOrderShippingAddress(shippingFormData, { request });
          if (result.setOrderShippingAddress.__typename === 'Order') {
            activeOrder = result.setOrderShippingAddress;
          } else {
            error = result.setOrderShippingAddress;
          }
        }
        break;
      case 'setOrderCustomer':
        const customerData = Object.fromEntries<any>(body.entries()) as CreateCustomerInput;
        const resultCustomer = await setCustomerForOrder(customerData, { request });
        if (resultCustomer.setCustomerForOrder.__typename === 'Order') {
          activeOrder = resultCustomer.setCustomerForOrder;
        } else {
          error = resultCustomer.setCustomerForOrder;
        }
        break;
      case 'setShippingMethod':
        const shippingMethodId = body.get('shippingMethodId');
        if (typeof shippingMethodId === 'string') {
          const resultShippingMethod = await setOrderShippingMethod(shippingMethodId, { request });
          if (resultShippingMethod.setOrderShippingMethod.__typename === 'Order') {
            activeOrder = resultShippingMethod.setOrderShippingMethod;
          } else {
            error = resultShippingMethod.setOrderShippingMethod;
          }
        }
        break;
      case 'removeItem':
        const lineIdToRemove = body.get('lineId');
        if (lineIdToRemove) {
          const resultRemove = await removeOrderLine(lineIdToRemove.toString(), { request });
          if (resultRemove.removeOrderLine.__typename === 'Order') {
            activeOrder = resultRemove.removeOrderLine;
          } else {
            error = resultRemove.removeOrderLine;
          }
        }
        break;
      case 'adjustItem':
        const lineIdToAdjust = body.get('lineId');
        const quantity = body.get('quantity');
        if (lineIdToAdjust && quantity != null) {
          const resultAdjust = await adjustOrderLine(lineIdToAdjust.toString(), +quantity, { request });
          if (resultAdjust.adjustOrderLine.__typename === 'Order') {
            activeOrder = resultAdjust.adjustOrderLine;
          } else {
            error = resultAdjust.adjustOrderLine;
          }
        }
        break;
      case 'addItemToOrder':
        const variantId = body.get('variantId')?.toString();
        const qty = Number(body.get('quantity')?.toString() ?? 1);
        if (!variantId || !(qty > 0)) {
          throw new Error(`Invalid input: variantId ${variantId}, quantity ${qty}`);
        }
        const resultAdd = await addItemToOrder(variantId, qty, { request });
        if (resultAdd.addItemToOrder.__typename === 'Order') {
          activeOrder = resultAdd.addItemToOrder;
        } else {
          error = resultAdd.addItemToOrder;
        }
        break;
      default:
        // No action
        break;
    }
  } catch (e) {
    console.error('Error processing action:', e);
    error = {
      errorCode: ErrorCode.InternalServerError,
      message: e.message,
    };
  }

  let headers: ResponseInit['headers'] = {};
  const session = await getSessionStorage().getSession(request.headers.get('Cookie'));
  session.flash('activeOrderError', error);
  headers = {
    'Set-Cookie': await getSessionStorage().commitSession(session),
  };

  if (!activeOrder) {
    activeOrder = await getActiveOrder({ request });
  }

  return json({ activeOrder }, { headers });
}