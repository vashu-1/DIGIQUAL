import AuthCallbackClient from './AuthCallbackClient';

const AuthCallbackPage = ({ searchParams }) => {
  return <AuthCallbackClient code={searchParams?.code || ''} />;
};

export default AuthCallbackPage;
