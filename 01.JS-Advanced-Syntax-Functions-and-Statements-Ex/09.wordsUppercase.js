function wordsUppercase(text) {
    const pattern = /\w+/g;
    const convertedText = text.match(pattern).join(', ').toUpperCase();

    console.log(convertedText);
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');