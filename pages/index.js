import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
	const [quote, setQuote] = useState(undefined);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getRandomQuote();
	}, []);

	function saveQuote() {
		localStorage.setItem(
			`quote_${quote.id}`,
			JSON.stringify({ id: quote.id, content: quote.content, author: quote.author })
		);
	}

	async function getRandomQuote() {
		setLoading(true);

		const response = await fetch('https://api.quotable.io/random');
		const data = await response.json();

		setQuote({ id: data._id, content: data.content, author: data.author });

		setLoading(false);
	}

	return (
		<>
			<Navbar />
			<main className=' bg-yellow-50 flex items-center min-h-screen overflow-hidden'>
				<div className=' -mt-36 px-14 container max-w-2xl py-10 text-center text-yellow-700 bg-yellow-100 border-2 border-yellow-700 shadow-lg'>
					{loading ? (
						<div>
							<p className='text-xl'>Loading...</p>
						</div>
					) : (
						<div>
							<p className='text-2xl italic'>{quote.content}</p>
							<p className=' text-md mt-4 font-semibold'>{quote.author}</p>
						</div>
					)}

					<div className='mt-8'>
						<button
							className=' hover:bg-yellow-400 active:scale-95 px-4 py-2 mr-2 text-xl transform bg-yellow-300 cursor-pointer'
							onClick={getRandomQuote}>
							Next Quote
						</button>
						<button
							className=' hover:bg-yellow-400 active:scale-95 px-4 py-2 ml-2 text-xl transform bg-yellow-300 cursor-pointer'
							onClick={saveQuote}>
							Save Quote
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
