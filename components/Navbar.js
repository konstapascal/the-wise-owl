import HamburgerMenu from '../components/HamburgerMenu';
import Menu from '../components/Menu';

import Link from 'next/link';

function Navbar() {
	return (
		<nav
			id='nav'
			className=' md:py-6 sticky inset-x-0 z-10 flex justify-around py-4 align-middle bg-yellow-100'>
			<Link href={`/`}>
				<a id='logo' className='md:text-5xl text-4xl italic font-bold text-yellow-700'>
					The Wise Owl
				</a>
			</Link>
			<Menu />
			<HamburgerMenu />
		</nav>
	);
}
export default Navbar;
