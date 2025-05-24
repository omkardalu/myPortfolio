import SocialLinks from './SocialLinks.jsx';

const Footer = () => {
  return(
    <footer className='flex justify-between gap-10 flex-col item-center bg-gradient-to-r from-[#CF82C1] to-[#E6ABBB] p-8 sm:flex-row' >
      <p className='flex justify-center items-center'>&copy; 2025 Omkar. All Right reserved.</p >
        <SocialLinks />
    </footer>
  )
};

export default Footer;