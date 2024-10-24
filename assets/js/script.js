document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new-quote').addEventListener('click', getQuote);
   
    const localQuotes = [
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Your limitation—it's only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it."
    ];

    function getQuote() {
        console.log('Button clicked!');
        const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        document.getElementById('quote').innerText = randomQuote;
    }
});
