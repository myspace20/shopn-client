import { useNavigate, useSearchParams } from 'react-router';

import { paths } from '@/configs/paths';
import { LoginForm } from '@/features/auth/components/login-form';
import { AuthLayout } from '@/components/layouts/auth-layout';

const LoginRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <AuthLayout title='Login'>
      <LoginForm
        onSuccess={() => {
          navigate(
            `${redirectTo ? `${redirectTo}` : paths.app.dashboard.getHref()}`,
            {
              replace: true,
            },
          );
        }}
      />
      </AuthLayout>
  );
};

export default LoginRoute;