import { redirect } from 'next/navigation';

const VerifyPage = () => {
  redirect('/auth/signin');
};

export default VerifyPage;
