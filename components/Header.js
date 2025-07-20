import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="max-w-9xl mx-auto flex items-center justify-between py-3.5">
      <Logo />
      <Navigation />
    </header>
  );
}
