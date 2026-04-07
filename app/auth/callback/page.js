import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const AuthCallbackPage = async ({ searchParams }) => {
  const params = await searchParams;
  const hasCode = Boolean(params?.code);

  if (!hasCode) {
    redirect('/auth/signin');
  }

  const cookieStore = await cookies();
  cookieStore.set('student_auth', '1', {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect('/portal');
};

export default AuthCallbackPage;
