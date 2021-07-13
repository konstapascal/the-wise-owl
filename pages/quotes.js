import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Quote from '../components/Quote';

function Quotes() {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		if (!localStorage.getItem('quotes')) localStorage.setItem('quotes', JSON.stringify([]));

		const initialQuotes = JSON.parse(localStorage.getItem('quotes'));
		setQuotes(initialQuotes);
	}, []);

	function deleteQuote(quote) {
		const filteredQuotes = quotes.filter(entry => entry.quote !== quote);

		localStorage.setItem('quotes', JSON.stringify(filteredQuotes));
		setQuotes(filteredQuotes);
	}

	return (
		<>
			<Navbar />
			<div className='main-wrapper relative min-h-screen overflow-hidden bg-fixed'>
				<main className=' md:px-24 mt-44 container w-11/12 max-w-4xl px-6 py-6 mb-20 text-yellow-700 bg-yellow-100 rounded-md shadow-2xl'>
					{quotes.length === 0 ? (
						<p className=' my-6 text-2xl text-center'>No quotes saved yet!</p>
					) : (
						quotes.map(quote => {
							return (
								<Quote
									key={quote.quote}
									quote={quote.quote}
									author={quote.author}
									deleteQuote={deleteQuote}
								/>
							);
						})
					)}
				</main>
			</div>
		</>
	);
}
export default Quotes;
