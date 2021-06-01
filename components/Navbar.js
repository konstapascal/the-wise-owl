import Link from 'next/link';

function Navbar() {
	return (
		<nav className=' flex justify-between p-6 align-middle'>
			<div>
				<p className='text-5xl font-bold text-yellow-700'>The Wise Owl</p>
			</div>
			<ul className=' flex items-center gap-4 text-2xl text-yellow-700'>
				<Link href={`/`}>
					<a className=' px-4 py-2 text-2xl font-semibold bg-yellow-300 cursor-pointer'>
						Generate Quotes
					</a>
				</Link>
				<Link href={`/quotes`}>
					<a className=' px-4 py-2 text-2xl font-semibold bg-yellow-300 cursor-pointer'>
						My Quotes
					</a>
				</Link>
			</ul>
		</nav>
	);
}
export default Navbar;
