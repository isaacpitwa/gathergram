import React from 'react';

interface RoundButtonProps {
    label: string;
    customStyles: string;
    onClick: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({label, onClick , customStyles}) => {
    return (
        <button onClick={onClick} className={`rounded-full ${customStyles}  text-white`}>
            {label}
        </button>
    );
};

export default RoundButton;