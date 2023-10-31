import { SessionStorage } from '@remix-run/server-runtime/dist/sessions';
import { ErrorResult } from '~/generated/graphql';

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
