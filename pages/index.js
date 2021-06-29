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
			<div className=' bg-yellow-50 min-h-screen'>
				<Navbar />
				<main className=' px-14 mt-14 container max-w-3xl py-10 text-center text-yellow-700 bg-yellow-100 rounded-md shadow-lg'>
					{loading ? (
						<div>
							<p className='text-xl'>Loading...</p>
						</div>
					) : (
						<div>
							<p className='text-xl italic font-semibold'>{`"${quote.content}"`}</p>
							<p className=' text-md opacity-90 mt-4 font-semibold'>{`- ${quote.author}`}</p>
						</div>
					)}
					<div className='mt-8'>
						<button
							className=' hover:bg-yellow-300 active:scale-95 text-md px-4 py-2 mr-2 font-semibold transform bg-yellow-200 rounded-md cursor-pointer'
							onClick={getRandomQuote}>
							Next Quote
						</button>
						<button
							className=' hover:bg-yellow-300 active:scale-95 text-md px-4 py-2 ml-2 font-semibold transform bg-yellow-200 rounded-md cursor-pointer'
							onClick={saveQuote}>
							Save Quote
						</button>
					</div>
				</main>
			</div>
		</>
	);
}
