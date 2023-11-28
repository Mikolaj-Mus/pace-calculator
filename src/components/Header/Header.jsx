import logo from "../../assets/running-logo-man.png";
import "./Header.css";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo of running people" />
      <h1>Pace Calculator</h1>
    </header>
  );
}
