export const applyPattern = (value: string) => {
    if (value === '' || value === '-')
        return value
    value = value.split(' ').join('').replace('--', '-')
    const regex = RegExp('-?\\d*')
    return regex.exec(value)!["0"]
}