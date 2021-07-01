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
			<div className=' relative flex items-center min-h-screen -mt-24 overflow-hidden'>
				{/* BG IMAGE AND FILTER */}
				<div className=' absolute inset-0'>
					<div className='opacity-10 absolute w-full h-full bg-[#B45309]'></div>
					<img
						className='object-cover object-center w-full h-full'
						src='/forest-6.jpg'
						alt='forest background'
					/>
				</div>

				{/* MAIN CONTENT, QUOTE GENERATOR */}
				<main className=' md:px-14 -mt-36 container z-20 w-11/12 max-w-3xl px-4 py-10 text-center text-yellow-700 bg-yellow-100 rounded-md shadow-2xl'>
					{loading ? (
						<div>
							<p className='text-xl'>Loading...</p>
						</div>
					) : (
						<div>
							<p className='lg:text-2xl text-xl italic font-semibold'>{`"${quote.content}"`}</p>
							<p className=' text-md opacity-90 mt-4 font-semibold'>{`- ${quote.author}`}</p>
						</div>
					)}
					<div className=' flex justify-center mt-8'>
						<button
							className=' hover:bg-yellow-300 active:scale-95 text-md lg:mr-2 px-4 py-2 mr-1 font-semibold transform bg-yellow-200 rounded-md shadow-lg cursor-pointer'
							onClick={getRandomQuote}>
							Next Quote
						</button>
						<button
							className=' hover:bg-yellow-300 active:scale-95 text-md lg:ml-2 px-4 py-2 ml-1 font-semibold transform bg-yellow-200 rounded-md shadow-lg cursor-pointer'
							onClick={saveQuote}>
							Save Quote
						</button>
					</div>
				</main>
			</div>
		</>
	);
}
