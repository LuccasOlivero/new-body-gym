function LogoGym({ sizeW = "full", sizeH = "full" }) {
  return (
    <img
      src="/logo.png"
      alt="logo.png"
      className={`w-${sizeW} h-${sizeH} block`}
      style={{ filter: "drop-shadow(0px 0px 8px red)" }}
    />
  );
}

export default LogoGym;
