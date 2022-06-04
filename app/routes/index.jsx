import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to JPA Blog</h1>
      <ul>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
      </ul>
    </div>
  );
}
