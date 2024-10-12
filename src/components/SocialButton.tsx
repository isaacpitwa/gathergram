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

const SocialButton : React.FC<SocialButtonProps>  = ({label, icon, onClick}) => {
    return (
        <button className='flex gap-x-2 px-8  py-2 border border-[#323232] rounded-md items-center'>
            <img src={socialIcons[icon]} alt="Google icon" className='w-4'/>
            <span>{label}</span>
        </button>
    );
};

export default SocialButton;