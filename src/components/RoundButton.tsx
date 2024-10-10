import React from 'react';

interface RoundButtonProps {
    label: string;
    bgColor: string;
    onClick: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({label, onClick , bgColor}) => {
    return (
        <button onClick={onClick} className={`rounded-full bg-${bgColor}`}>
            {label}
        </button>
    );
};

export default RoundButton;