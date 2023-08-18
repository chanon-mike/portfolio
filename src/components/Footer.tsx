const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center mb-10">
      <h5 className="text-text font-mono text-xs font-thin">
        © {thisYear} Chanon Limpipolpaibul. All Rights Reserved.
      </h5>
    </footer>
  );
};

export default Footer;
