import diamond from './diamond';

test('Print a diamond with rows', () => {
    expect(diamond(5)).toBe('Diamond Printed!');
});

test('Print a diamond with rows', () => {
    expect(diamond(10)).toBe('Diamond Printed!');
});
