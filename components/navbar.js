const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          background-color: #333;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }

        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          margin-right: 1rem;
        }

        p {
          color: #fff;
          margin: 0;
          cursor: pointer;
        }

        p:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
