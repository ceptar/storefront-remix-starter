import { SessionStorage } from '@remix-run/server-runtime/dist/sessions';
import { ErrorResult } from '~/generated/graphql';

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
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secrets: ['5ip5wpwwzj'],
    },
  });
  return sessionStorage;
}
