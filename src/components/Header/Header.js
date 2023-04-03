import { Link } from 'react-router-dom';
import { useLogOut } from 'api/hooks';

export const Header = () => {
  const logOut = useLogOut();
  return (
    <>
      <div>Header</div>
      <ul>
        <li>
          <Link to="search">Search</Link>
        </li>
        <li>
          <Link to="add">Add Recipe</Link>
        </li>
        <li>
          <Link to="favorite">Favorite</Link>
        </li>
      </ul>
      <button onClick={() => logOut.mutate()}>Log out</button>
    </>
  );
};
