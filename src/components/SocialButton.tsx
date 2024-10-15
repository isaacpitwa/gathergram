import React from 'react';
import GoogleIcon from '../assets/icons/google.svg';
import FacebookIcon from '../assets/icons/facebook.svg';
import AppleIcon from '../assets/icons/apple.svg';

const socialIcons = {
    google:GoogleIcon,
    facebook:FacebookIcon,
    apple:AppleIcon
}

interface SocialButtonProps {
    label: string;
    icon: 'google' | 'facebook' | 'apple';
    onClick: () => void;
}

/**
 * SocialButton component renders a button with an icon and label.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.label - The label text to display on the button
 * @param {string} props.icon - The key for the icon to display from the socialIcons object
 * @param {function} props.onClick - The function to call when the button is clicked
 * 
 * @returns {JSX.Element} A button element with an icon and label
 */
const SocialButton : React.FC<SocialButtonProps>  = ({label, icon, onClick}) => {
    return (
        <button className='flex gap-x-2 px-8  py-2 border border-[#323232] rounded-md items-center justify-center md:justify-start' onClick={onClick}>
            <img src={socialIcons[icon]} alt="Google icon" className='w-4'/>
            <span>{label}</span>
        </button>
    );
};

export default SocialButton;