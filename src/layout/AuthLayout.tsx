import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='w-screen h-screen flex'>
            <div className='hidden md:block w-1/2 overflow-hidden auth'>
                <div className='w-full h-screen bg-[#F5169C1F] z-40'></div>
            </div>
            <div className='h-screen w-1/2 overflow-scroll flex justify-center'>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;