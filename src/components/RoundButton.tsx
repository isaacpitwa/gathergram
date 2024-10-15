import React from 'react';

interface RoundButtonProps {
    label: string;
    customStyles: string;
    onClick: () => void;
}

/**
 * A functional component that renders a round button with customizable styles.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.label - The text label to be displayed on the button.
 * @param {function} props.onClick - The callback function to be called when the button is clicked.
 * @param {string} [props.customStyles] - Additional custom styles to be applied to the button.
 * @returns {JSX.Element} A JSX element representing the round button.
 */
const RoundButton: React.FC<RoundButtonProps> = ({label, onClick , customStyles}) => {
    return (
        <button onClick={onClick} className={`rounded-full ${customStyles} max-h-12 hover:bg-opacity-80 whitespace-nowrap`} type='submit'>
            {label}
        </button>
    );
};

export default RoundButton;