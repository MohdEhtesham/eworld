// regex.js
export const MAX_EMAIL_DIGITS = 30;
export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_DIGITS = 20;
export const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
export const passwordRegex = `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{${MIN_PASSWORD_LENGTH},}$`;
