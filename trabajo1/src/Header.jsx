import logo from "./assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar  py-5"> 
      <div className="container-fluid d-flex align-items-center">
        <img 
          src={logo} 
          alt="Logo" 
          width="50" 
          height="50" 
          className="d-inline-block align-top"
        />
      </div>
    </nav>
  );
}
