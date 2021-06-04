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
			<main className='py-52 bg-yellow-50 min-h-screen'>
				<div className=' px-14 container max-w-4xl py-10 text-yellow-700 bg-yellow-100 border-2 border-yellow-700 shadow-lg'>
					{quotes.length === 0 ? (
						<p className='text-2xl text-center'>No quotes saved yet!</p>
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
				</div>
			</main>
		</>
	);
}
export default Quotes;
