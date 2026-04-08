import React from 'react';
import { cookies } from 'next/headers';
import CompanyLanding from '@/components/landing/CompanyLanding';

const HomePage = async () => {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('student_auth')?.value === '1';

  return <CompanyLanding isAuthenticated={isAuthenticated} />;
};

export default HomePage;
