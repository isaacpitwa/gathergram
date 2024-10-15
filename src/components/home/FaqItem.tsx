import React from 'react';
import HeartIcon from '../../assets/icons/heart.svg'
import InvoiceIcon from '../../assets/icons/invoice.svg'
import CanceIcon from '../../assets/icons/cancel.svg'
import ChangeIcon from '../../assets/icons/change.svg'
import MailIcon from '../../assets/icons/mail.svg'
import BillingIcon from '../../assets/icons/billing.svg'

interface FaqItemProps {
    question: string;
    answer: string;
    icon: keyof typeof Icons;
}

const Icons = {
    heart: HeartIcon,
    invoice: InvoiceIcon,
    cancel:CanceIcon,
    change: ChangeIcon,
    mail: MailIcon,
    billing:BillingIcon
}
/**
 * FaqItem component renders a FAQ item with a question, answer, and an icon.
 *
 * @component
 * @param {FaqItemProps} props - The properties for the FaqItem component.
 * @param {string} props.question - The FAQ question to be displayed.
 * @param {string} props.answer - The answer to the FAQ question.
 * @param {string} props.icon - The icon to be displayed alongside the FAQ item.
 * @returns {JSX.Element} The rendered FaqItem component.
 */
const FaqItem: React.FC<FaqItemProps> = ({question, answer, icon}) => {
    return (
        <div className='flex flex-col items-center justify-center md:w-1/3 w-full my-8  text-center'>
            <div className='flex items-center justify-center bg-[#FFE3F3] p-4 rounded-full mb-4'>
                <img src={ Icons[icon] } alt="Heart icon" />
            </div>
            <h5 className='text-bold text-lg'>{question}</h5>
            <p className='px-16 text-sm mt-2'>{answer}</p>
        </div>
    );
};

export default FaqItem;