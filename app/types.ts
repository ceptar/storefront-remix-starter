import type { useActiveOrder } from '~/utils/use-active-order';
import type { CreateAddressInput } from '~/generated/graphql';

export type OutletContext = ReturnType<typeof useActiveOrder>;

export type ShippingFormData = CreateAddressInput;
