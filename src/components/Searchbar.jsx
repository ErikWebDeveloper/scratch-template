const Searchbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid p-2">
        <form
          className="d-flex justify-content-center gap-1 m-auto"
          role="search"
        >
          <input
            className="form-control w-50"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Searchbar;
