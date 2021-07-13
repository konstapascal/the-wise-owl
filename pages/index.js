import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

import quotes from '../data/quotes';
import quoteExists from '../lib/quoteExists';

export default function Home() {
	const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

	useEffect(() => {
		if (!localStorage.getItem('quotes')) localStorage.setItem('quotes', JSON.stringify([]));
	}, []);

	function saveQuote() {
		const previousLocalStorage = localStorage.getItem('quotes');
		const previousLocalStorageParsed = JSON.parse(previousLocalStorage);

		if (!quoteExists(quote)) {
			localStorage.setItem('quotes', JSON.stringify([...previousLocalStorageParsed, quote]));
		}
	}

	async function getRandomQuote() {
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		setQuote(randomQuote);
	}

	return (
		<>
			<Head>
				<title>the-wise-owl</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Navbar />
			<div className='main-wrapper min-h-screen overflow-hidden'>
				<main className=' md:px-16 container w-11/12 max-w-3xl px-4 py-12 mt-64 mb-32 text-center text-yellow-700 bg-yellow-100 rounded-md shadow-2xl'>
					<div>
						<p
							suppressHydrationWarning
							className='lg:text-2xl text-xl italic font-semibold'>{`"${quote.quote}"`}</p>
						{quote.author && (
							<p
								suppressHydrationWarning
								className=' text-md opacity-90 mt-4 font-medium'>{`- ${quote.author}`}</p>
						)}
					</div>
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
