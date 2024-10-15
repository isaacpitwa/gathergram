import React from 'react';

/**
 * AuthLayout component provides a layout for authentication pages.
 * It splits the screen into two halves, with the left half hidden on small screens
 * and displaying a background on medium and larger screens.
 * The right half is scrollable and centers its children.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed within the layout.
 *
 * @returns {JSX.Element} The rendered AuthLayout component.
 */
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='w-screen h-screen flex'>
            <div className='hidden md:block w-1/2 overflow-hidden auth'>
                <div className='w-full h-screen bg-[#F5169C1F] z-40'></div>
            </div>
            <div className='h-screen md:w-1/2 overflow-scroll flex justify-center'>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;