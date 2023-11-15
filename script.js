const extendHex = (shortHex) => {
    // Remove '#' if present and convert to uppercase
    shortHex = shortHex.replace(/^#/, '').toUpperCase();

    // Extend the short hex code to the full hex code
    const fullHex = shortHex
        .split('')
        .map(component => component.repeat(2))
        .join('');

    // Add '#' prefix to the full hex code
    return '#' + fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
