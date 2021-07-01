import HamburgerMenu from '../components/HamburgerMenu';
import Menu from '../components/Menu';

import Link from 'next/link';

function Navbar() {
	return (
		<nav
			id='nav'
			className=' fixed inset-x-0 top-0 z-10 flex justify-around h-24 align-middle bg-yellow-100'>
			<div className='flex items-center'>
				<Link href={`/`}>
					<a id='logo' className='md:text-5xl text-4xl italic font-bold text-yellow-700'>
						The Wise Owl
					</a>
				</Link>
			</div>
			<Menu />
			<HamburgerMenu />
		</nav>
	);
}
export default Navbar;
