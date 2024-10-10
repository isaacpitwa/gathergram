import React from 'react';
import RoundButton from '../RoundButton';
import Logo from '../../assets/images/logo.png'
import { HashLink as Link} from 'react-router-hash-link'
import AdBanner from '../AdBanner';

const Header = () => {
    return (
        <header >
            <AdBanner />
            <nav className='flex items-center justify-between py-4 px-32'>
                <a href='/'><img src={Logo} alt='Gathergram' /></a>
                <ul className='flex items-center  gap-x-8'>
                    <li className='text-base'><Link to={`/`} smooth>Home</Link></li>
                    <li className='text-base'><Link to={`#features`} smooth>Features</Link></li>
                    <li className='text-base'><Link to={`#howItWorks`} smooth>How it works</Link></li>
                    <li className='text-base'><Link to={`#pricing`} smooth>Pricing</Link></li>
                    <li className='text-base'><Link to={`#about`} smooth>About</Link></li>
                    <li className='text-base'><Link to={`#contact`} smooth>Contact</Link></li>
                </ul>
                <div className=' flex items-center gap-x-8'>
                    <button className='text-base hover:text-primary'>Sign in</button>
                    <RoundButton label='Get started' customStyles='bg-black px-6 py-3 font-bold text-white' onClick={() => console.log('Sign up')} />
                </div>
            </nav>
        </header>
    );
};

export default Header;