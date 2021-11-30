export function isValidKey(
    key: string | number | symbol,
    object: object
): key is keyof typeof object {
    return key in object;
}

export const randomIntInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
