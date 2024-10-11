import React from 'react';
import ContactCard from './ContactCard';

import { IconType } from './ContactCard'; // Assuming IconType is defined in IconTypes.ts

const contacts: { title: string; description: string; contact: string; icon: IconType }[] = [
    {
        title: 'Chat to sales',
        description: 'Speak to our friendly team.',
        contact: 'sales@GatherGram.com',
        icon: 'chat' as IconType
    },
    {
        title: 'Chat to support',
        description: 'We’re here to help.',
        contact: 'support@GatherGram.com',
        icon: 'chatSupport' as IconType
    },
    {
        title: 'Visit us',
        description: 'Visit our office HQ.',
        contact: '100 Smith Street Collingwood VIC 3066 AU',
        icon: 'location' as IconType
    },
    {
        title: 'Call us',
        description: 'Mon-Fri from 8am to 5pm.',
        contact: '+1 (555) 000-0000',
        icon: 'phone' as IconType
    }
]

const ContactSection = () => {
    
    return (
        <section className="sectionWrapper my-16">
        <span className="text-primary text-xs">Contact us</span>
        <h3 className="text-xl font-semibold ">We’d love to hear from you</h3>
        <p className="text-sm  mt-2 text-[#475467]">Our friendly team is always here to chat.</p>
        <div className='my-16 flex gap-x-8'>
            {
                contacts.map(contact => <ContactCard 
                title={contact.title}
                description={contact.description}
                contact={contact.contact}
                icon={contact.icon}
                />)
            }
        </div>
    </section>
    );
};

export default ContactSection;