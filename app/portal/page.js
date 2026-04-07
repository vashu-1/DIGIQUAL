import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import StudentPortal from '@/components/portal/StudentPortal';
import { institutes } from '@/data/institutes';

const PortalPage = () => {
  async function logoutAction() {
    'use server';

    const cookieStore = await cookies();
    cookieStore.set('student_auth', '', {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      expires: new Date(0),
    });

    redirect('/');
  }

  return <StudentPortal institutes={institutes} logoutAction={logoutAction} />;
};

export default PortalPage;
