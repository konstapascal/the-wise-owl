import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Quote from '../components/Quote';

function Quotes() {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		const quotesIds = Object.keys(localStorage).filter(entry => {
			return entry.startsWith('quote_');
		});
		const quotesArr = quotesIds.map(id => {
			return JSON.parse(localStorage.getItem(id));
		});

		setQuotes(quotesArr);
	}, []);

	function deleteQuote(id) {
		const newQuotes = quotes.filter(quote => quote.id !== id);
		setQuotes(newQuotes);

		localStorage.removeItem(`quote_${id}`);
	}

	return (
		<>
			<Navbar />
			<div className='main-wrapper relative min-h-screen overflow-hidden bg-fixed'>
				<main className=' md:px-24 md:py-16 mt-44 container w-11/12 max-w-4xl px-6 py-10 mb-20 text-yellow-700 bg-yellow-100 rounded-md shadow-2xl'>
					{quotes.length === 0 ? (
						<p className=' text-2xl text-center'>No quotes saved yet!</p>
					) : (
						quotes.map(quote => {
							return (
								<Quote
									key={quote.id}
									id={quote.id}
									content={quote.content}
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
