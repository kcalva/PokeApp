import { Outlet, Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
          {/* <li>
            <Link to="/moves">Moves</Link>
          </li>
          <li>
            <Link to="/pastDamageRelations">Past Damage Relations</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
