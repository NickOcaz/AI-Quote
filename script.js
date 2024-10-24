document.getElementById('new-quote').addEventListener('click', getQuote);

function getQuote() {
    console.log('Button clicked!');
    fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        document.getElementById('quote').innerText = randomQuote.text;
    })
    .catch(error => {
        console.error('Error fetching the quote:', error);
        document.getElementById('quote').innerText = 'Sorry, something went wrong. Try again later.';
    });
}
