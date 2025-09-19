import { Link } from 'react-router';

export function HomePage() {
  return (
    <>
      <div>This is the Home Page</div>
      <div>
        <Link to="auth/login">Go to Login</Link>
      </div>
    </>
  );
}
