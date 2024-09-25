function colorize() {
    let colorizedElements = document.querySelectorAll('table tr:nth-child(even)');
    
    for (const element of colorizedElements) {
        element.style.backgroundColor = 'teal';
    }
}