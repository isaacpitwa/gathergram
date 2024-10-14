/**
 * Validates if the given email is in a proper format.
 * @param email - The email string to validate.
 * @returns True if the email is valid, otherwise false.
 */
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates if the given password meets the required criteria.
 * Criteria: At least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.
 * @param password - The password string to validate.
 * @returns True if the password is valid, otherwise false.
 */
export function validatePassword(password: string): boolean {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}
/**
 * Validates if the given full name meets the required criteria.
 * Criteria: Required, minimum 4 characters, maximum 50 characters.
 * @param fullName - The full name string to validate.
 * @returns True if the full name is valid, otherwise false.
 */
export function validateFullName(fullName: string): boolean {
    const minLength = 4;
    const maxLength = 50;
    return fullName.length >= minLength && fullName.length <= maxLength;
}