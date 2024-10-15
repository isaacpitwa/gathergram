import React, {useState} from 'react';
import RoundButton from '../RoundButton';
import Logo from '../../assets/images/logo.png'
import { HashLink as Link} from 'react-router-hash-link'
import { MdMenu,MdClose } from "react-icons/md";

import AdBanner from '../AdBanner';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';

/**
 * Header component that displays the navigation bar and handles menu toggling.
 * 
 * @component
 * @returns {JSX.Element} The rendered header component.
 * 
 * @example
 * <Header />
 * 
 * @remarks
 * This component includes:
 * - A logo that links to the home page.
 * - Navigation links to different sections of the page.
 * - Sign in and Get started buttons.
 * - A responsive menu that toggles visibility on smaller screens.
 * 
 * @function
 * @name Header
 * 
 * @description
 * The Header component manages the state of the menu (open/closed) and provides navigation functionality.
 * It uses the `useNavigate` hook from `react-router-dom` for navigation and `useState` for managing the menu state.
 * 
 * @hook
 * @name useState
 * @description Manages the state of the menu (open/closed).
 * 
 * @hook
 * @name useNavigate
 * @description Provides navigation functionality.
 * 
 * @inner
 * @function
 * @name toggleMenu
 * @description Toggles the menu open/closed state.
 * 
 * @inner
 * @function
 * @name onSignInClicked
 * @description Navigates to the login page.
 * 
 * @inner
 * @function
 * @name onGetStartedClicked
 * @description Navigates to the signup page.
 */
const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
   const  onSignInClicked = () =>{
        navigate(ROUTES.LOGIN)
    }
    const onGetStartedClicked = () =>{
        navigate(ROUTES.SIGNUP)
    }
    return (
        <header >
            <AdBanner />
            <nav className='flex items-center justify-between py-4 sectionWrapper'>
                <a href='/' className='mr-8'><img src={Logo} alt='Gathergram' /></a>
                <ul className='hidden md:flex items-center  gap-x-4 '>
                    <li className='text-base'><Link to={`/`} smooth>Home</Link></li>
                    <li className='text-base'><Link to={`#features`} smooth>Features</Link></li>
                    <li className='text-base'><Link to={`#howItWorks`} smooth className='whitespace-nowrap'>How it works</Link></li>
                    <li className='text-base'><Link to={`#pricing`} smooth>Pricing</Link></li>
                    <li className='text-base'><Link to={`#about`} smooth>About</Link></li>
                    <li className='text-base'><Link to={`#contact`} smooth>Contact</Link></li>
                </ul>
                <div className='hidden md:flex items-center gap-x-4  md:gap-x-8 pl-4'>
                    <button className='text-base hover:text-primary whitespace-nowrap' onClick={onSignInClicked}>Sign in</button>
                    <RoundButton label='Get started' customStyles='bg-black px-6 py-3 font-bold text-white' onClick={onGetStartedClicked} />
                </div>
                <button   className='block md:hidden'onClick={toggleMenu}><MdMenu className='text-3xl text-black' /></button> 
            </nav>
            { isMenuOpen && <div className='absolute h-screen bg-white w-screen  top-0 '>
                    <div className='flex justify-end px-8 py-4'><button onClick={toggleMenu}><MdClose className='text-3xl text-black' /></button></div>
                    <ul className='flex items-center  flex-col gap-y-4 '>
                        <li className='text-base'><Link to={`/`} smooth>Home</Link></li>
                        <li className='text-base'><Link to={`#features`} smooth>Features</Link></li>
                        <li className='text-base'><Link to={`#howItWorks`} smooth className='whitespace-nowrap'>How it works</Link></li>
                        <li className='text-base'><Link to={`#pricing`} smooth>Pricing</Link></li>
                        <li className='text-base'><Link to={`#about`} smooth>About</Link></li>
                        <li className='text-base'><Link to={`#contact`} smooth>Contact</Link></li>
                    </ul>
                    <div className=' flex items-center  flex-col gap-y-4 pt-4 '>
                    <button className='text-base hover:text-primary whitespace-nowrap' onClick={onSignInClicked}>Sign in</button>
                    <RoundButton label='Get started' customStyles='bg-black px-6 py-3 font-bold text-white' onClick={onGetStartedClicked} />
                    </div>
                </div>}
        </header>
    );
};

export default Header;