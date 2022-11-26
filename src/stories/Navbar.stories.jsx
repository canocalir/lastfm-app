import Navbar from "../components/Navbar/Navbar";

export default {
  title: "Components",
  component: Navbar,
};

export const NavbarMain = ({ color, iconcolor }) => <Navbar
iconcolor={iconcolor} color={color} />;
NavbarMain.args = {
  color: "#121620",
  iconcolor: "#f1f1f1"
};
