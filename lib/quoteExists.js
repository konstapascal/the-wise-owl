export default function quoteExists(quote) {
	return JSON.parse(localStorage.getItem('quotes')).some(entry => quote.quote === entry.quote);
}
