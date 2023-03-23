import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Meow-fandom</h1>
          <div className="menu-nav">
            <NavLink to="home">Home</NavLink>
            <NavLink to="blog">Blog</NavLink>
            <NavLink to="newblog">New Blog</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
