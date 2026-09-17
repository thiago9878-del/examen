const quotes = [
    { text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", author: "John Lennon" },
    { text: "El único modo de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
    { text: "La sencillez es la máxima sofisticación.", author: "Leonardo da Vinci" }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('new-quote');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.textContent = `"${quote.text}"`;
        authorElement.textContent = `- ${quote.author}`;
        quoteElement.style.opacity = 1;
    }, 500);
});
