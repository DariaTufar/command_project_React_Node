import { Link } from 'react-router-dom';
export const WelcomePage = () => {
  return (
    <>
      <div>WelcomePage</div>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </>
  );
};
