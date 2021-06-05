import Link from 'next/link';

function Navbar() {
	return (
		<nav className=' fixed inset-x-0 z-10 flex justify-between p-6 align-middle'>
			<div>
				<p className='text-4xl italic font-bold text-yellow-700'>The Wise Owl</p>
			</div>
			<ul className=' flex items-center gap-4 text-2xl text-yellow-700'>
				<Link href={`/the-wise-owl`}>
					<a className=' hover:bg-yellow-400 active:scale-95 px-4 py-2 text-xl font-semibold transform bg-yellow-300 cursor-pointer'>
						Generate Quotes
					</a>
				</Link>
				<Link href={`/the-wise-owl/quotes`}>
					<a className=' hover:bg-yellow-400 active:scale-95 px-4 py-2 text-xl font-semibold transform bg-yellow-300 cursor-pointer'>
						My Quotes
					</a>
				</Link>
			</ul>
		</nav>
	);
}
export default Navbar;
