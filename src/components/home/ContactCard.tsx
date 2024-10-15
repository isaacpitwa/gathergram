import React from 'react';
import ChatIcon from '../../assets/icons/chat.svg'
import LocationIcon from '../../assets/icons/location.svg'
import PhoneIcon from '../../assets/icons/phone.svg'
import ChatSupport from '../../assets/icons/chat_support.svg'

const ContactIcons = {
    chat: ChatIcon,
    location: LocationIcon,
    phone: PhoneIcon,
    chatSupport: ChatSupport
}
export type IconType = 'chat' | 'location' | 'phone' | 'chatSupport';

interface ContactCardProps {
    title: string;
    description: string;
    contact: string;
    icon: IconType;
}

/**
 * ContactCard component displays a card with contact information.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the contact card.
 * @param {string} props.description - The description of the contact card.
 * @param {string} props.contact - The contact information.
 * @param {string} props.icon - The icon identifier for the contact card.
 * @returns {JSX.Element} The rendered ContactCard component.
 */
const ContactCard: React.FC<ContactCardProps> = ({ title, description, contact, icon }) => {
    return (
        <div className='bg-[#FFF6FC]  p-8 md:w-1/4 w-full rounded-md'>
            <div className='rounded-lg bg-primary p-2  mb-20 w-12 flex items-center justify-center' >
                <img src={ContactIcons[icon]} alt="Chat icon" className='w-6'/>
            </div>
            <h5 className='text-black text-xl mt-4 font-semibold'>{title}</h5>
            <p className='text-[#475467] text-sm my-2'>{description}</p>
            <p className='text-black font-semibold'>{contact}</p>
        </div>
    );
};

export default ContactCard;