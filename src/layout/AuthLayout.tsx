import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='w-screen h-screen flex'>
            <div className='hidden md:block w-1/2 bg-primary'></div>
            <>
                {children}
            </>
        </div>
    );
};

export default AuthLayout;