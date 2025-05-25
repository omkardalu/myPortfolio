import SocialLinks from "./SocialLinks.jsx";

const Footer = () => {
  return (
    <footer className="item-center flex flex-col justify-between gap-10 bg-transparent p-8 sm:flex-row">
      <p className="flex items-center justify-center">
        &copy; 2025 Omkar. All Right reserved.
      </p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
