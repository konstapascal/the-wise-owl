import Link from 'next/link';
import MobileNavbar from '../components/MobileNavbar';

function Navbar() {
	return (
		<nav className=' fixed inset-x-0 z-10 flex justify-around p-4 align-middle bg-yellow-100 border-b-2 border-yellow-700'>
			<div>
				<p className='text-4xl italic font-bold text-yellow-700'>The Wise Owl</p>
			</div>
			<ul className=' lg:flex items-center hidden gap-4 text-2xl text-yellow-700'>
				<Link href={`/`}>
					<a className=' hover:bg-yellow-400 active:scale-95 px-4 py-2 text-xl font-semibold transform bg-yellow-300 cursor-pointer'>
						Generate Quotes
					</a>
				</Link>
				<Link href={`/quotes`}>
					<a className=' hover:bg-yellow-400 active:scale-95 px-4 py-2 text-xl font-semibold transform bg-yellow-300 cursor-pointer'>
						My Quotes
					</a>
				</Link>
			</ul>
			<MobileNavbar />
		</nav>
	);
}
export default Navbar;
