import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Form } from '@remix-run/react';
import { redirect } from '@remix-run/server-runtime';

export async function action() {
  return redirect('/');
}

export default function SuccessPage() {
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md border-2 border-primary">
        <div className="bg-white py-8 px-4 shadow sm:px-10">
          <Form className="space-y-6" method="post">
            <div>
              <div className="flex justify-center">
                <div className="flex-grow">
                  <CheckCircleIcon
                    className="h-20 w-20 m-auto mb-2 text-primary"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p className="text-center mb-5">
                Your account has been created successfully! A verification link
                has been sent to your e-mail address.
              </p>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm uppercase tracking-[0.15em] text-discogray bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Go home
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
