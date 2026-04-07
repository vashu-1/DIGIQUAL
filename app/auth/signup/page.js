import { redirect } from 'next/navigation';

const SignUpPage = () => {
  redirect('/auth/signin');
};

export default SignUpPage;
