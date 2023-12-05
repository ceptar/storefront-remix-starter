import type { DataFunctionArgs} from '@remix-run/server-runtime';
import { redirect } from '@remix-run/server-runtime';
import { logout } from '~/providers/account/account';

export async function action({ request }: DataFunctionArgs) {
  const result = await logout({ request });
  return redirect('/', { headers: result._headers });
}

export async function loader() {
  return redirect('/');
}
