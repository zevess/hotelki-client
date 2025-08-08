export const pluralize = (n: number, wordForms: string[]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return wordForms[
        n % 100 > 4 && n % 100 < 20
            ? 2
            : cases[n % 10 < 5 ? n % 10 : 5]
    ];
}