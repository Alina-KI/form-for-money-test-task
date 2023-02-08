export const valueToNumber = (value: string) => {
    return Number(value.split(' ').join(''))
}