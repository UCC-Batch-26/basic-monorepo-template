import { Link } from 'react-router';

export function HomePage() {
  return (
    <div className="grid gap-2">
      <div>This is the Home Page</div>
      <Link to="/sample" className="underline mt-10 text-center">
        Go to Sample Page
      </Link>
    </div>
  );
}
