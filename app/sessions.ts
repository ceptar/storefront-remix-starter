import type { SessionStorage } from '@remix-run/server-runtime/dist/sessions';
import type { ErrorResult } from '~/generated/graphql';

function getCookieSessionStorageFactory() {
  let imp = ['@remix-run', 'node'];
  return require(imp.join('/')).createCookieSessionStorage;
}
let sessionStorage: SessionStorage<
  { activeOrderError: ErrorResult } & Record<string, any>
>;

export function getSessionStorage() {
  if (sessionStorage) {
    return sessionStorage;
  }
  const factory = getCookieSessionStorageFactory();
  sessionStorage = factory({
    cookie: {
      name: 'vendure_remix_session',
      httpOnly: false,
      path: '/',
      sameSite: 'none',
      secure: true,
      secrets: ['zsg8fmuy9co'],
    },
  });
  return sessionStorage;
}
