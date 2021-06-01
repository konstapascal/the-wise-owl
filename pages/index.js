import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<main className=' min-h-screen bg-yellow-200'>
			<Navbar />

			<div className='mt-36 bg-green-50 container max-w-2xl px-8 py-6 text-yellow-700'>
				<h2 className='text-5xl'>Test title</h2>
				<p className='my-5 text-xl'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit voluptatum
					nihil iure fugiat quisquam quos odio ut alias! Provident voluptatem exercitationem
					ipsum maxime saepe delectus officia hic, ut laudantium.
				</p>
				<p>- Author Name</p>

				<div className='mt-10 text-center'>
					<button className=' px-4 py-2 text-2xl bg-yellow-300 cursor-pointer'>
						Next Quote
					</button>
				</div>
			</div>
		</main>
	);
}
