import { redirect } from 'next/navigation';

const AuthIndexPage = () => {
  redirect('/auth/signin');
};

export default AuthIndexPage;
