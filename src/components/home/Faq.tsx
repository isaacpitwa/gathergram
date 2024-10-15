import React from 'react';
import FaqItem from './FaqItem';

interface Faq {
    question: string;
    answer: string;
    icon: 'heart' | 'invoice' | 'cancel' | 'change' | 'mail' | 'billing';
}

/**
 * An array of frequently asked questions (FAQs) used in the home component.
 * Each FAQ contains a question, an answer, and an associated icon.
 * 
 * @typedef {Object} Faq
 * @property {string} question - The question being asked.
 * @property {string} answer - The answer to the question.
 * @property {string} icon - The icon associated with the FAQ.
 * 
 * @constant {Faq[]} faqs
 * @example
 * const faqs: Faq[] = [{
 *     question: 'How does the free trial work?',
 *     answer: 'At the moment, the only way to add additional information to invoices is to add the information to the workspace\'s name.',
 *     icon: 'heart'
 * },
 * {
 *     question: 'Can I change my plan later?',
 *     answer: 'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
 *     icon: 'change'
 * },
 * {
 *     question: 'What is your cancellation policy?',
 *     answer: 'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
 *     icon: 'cancel'
 * },
 * {
 *     question: 'Can other info be added to an invoice?',
 *     answer: 'At the moment, the only way to add additional information to invoices is to add the information to the workspace\'s name.',
 *     icon: 'invoice'
 * },
 * {
 *     question: 'How does billing work?',
 *     answer: 'At the moment, the only way to add additional information to invoices is to add the information to the workspace\'s name.',
 *     icon: 'billing'
 * },
 * {
 *     question: 'Is there a free trial available?',
 *     answer: 'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.',
 *     icon: 'mail'
 * }]
 */
const faqs: Faq[] = [{
    question: 'How does the free trial work?',
    answer: 'At the moment, the only way to add additional information to invoices is to add the information to the workspace\'s name.',
    icon: 'heart'
},
{
    question: 'Can I change my plan later?',
    answer: 'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
    icon: 'change'
},
{
    question: 'What is your cancellation policy?',
    answer: 'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
    icon: 'cancel'
},
{
    question: 'Can other info be added to an invoice?',
    answer: 'At the moment, the only way to add additional information to invoices is to add the information to the workspace\'s name.',
    icon: 'invoice'
},
{
    question: 'How does billing work?',
    answer: 'At the moment, the only way to add additional information to invoices is to add the information to the workspace\'s name.',
    icon: 'billing'
},
{
    question: 'Is there a free trial available?',
    answer: 'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.',
    icon: 'mail'
}
]
const FaqSection = () => {
    return (
        <section className=" flex flex-col sectionWrapper py-16 items-center justify-center w-full" id="faq">
            <h3 className="text-xl font-semibold ">Frequently asked questions</h3>
            <p className="text-sm mt-2 ">Everything you need to know about the product and billing.</p>
            <div className='flex flex-wrap py-8'>
                {
                    faqs.map(faq => <FaqItem question={faq.question} answer={faq.answer} icon={faq.icon} />)
                }
            </div>
            <div className='flex items-center my-4'>
                <div className='w-14 h-14 rounded-full bg-[#ABB677] -mr-6'></div>
                <div className='w-16 h-16 rounded-full bg-[#C7B9DA] z-40'></div>
                <div className='w-14 h-14 rounded-full bg-[#D9B9BB] -ml-6'></div>
            </div>
            <h3 className="text-xl font-semibold ">Still have questions?</h3>
            <p className="text-sm my-2 ">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button className="bg-primary px-4  text-white text-sm max-h-12 py-2 rounded-md mt-2">Get in touch</button>
        </section>
    );
};

export default FaqSection;