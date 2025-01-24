function Header(props) {
    return (<header className="text-center py-12">
      <h1 className="text-5xl font-light text-white capitalize ">{props.title}</h1>
      <p className="text-2xl font-light text-white mt-4">{props.description}</p>
      </header>  );
}

export default Header;