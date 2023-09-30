import Button from "./Button";

import Logo from "./Logo";
import MainText from "./MainText";
import "./test.css";

function Main() {
  return (
    <main className="w-full h-[110vh] relative flex items-center max-lg:justify-center">
      <span className="bg-cover bg-top bg-main-bg w-full h-full absolute z-[-10] bg-no-repeat"></span>

      <section className="relative flex-col w-[41rem] max-lg:mx-8 pl-[10rem] max-lg:pl-[3rem] max-sm:p-0">
        <Logo />
        <MainText />
        <Button>Our clases</Button>
      </section>
    </main>
  );
}

export default Main;
