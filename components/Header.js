import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="max-w-9xl absolute top-0 right-1/2 z-20 mx-auto flex w-full translate-x-1/2 items-center justify-between py-3.5">
      <Logo />
      <Navigation />
    </header>
  );
}
