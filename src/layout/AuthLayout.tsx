import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <h1 className='text-primary'>Auth Layout</h1>
            {children}
        </div>
    );
};

export default AuthLayout;