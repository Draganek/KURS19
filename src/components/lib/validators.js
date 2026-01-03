export const validateEmail = (text) => {
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    return emailRegex.test(text)
}

export const validatePassword = (text) => {
    return text.length >= 4
}