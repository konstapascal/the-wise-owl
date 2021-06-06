import HamburgerMenu from '../components/HamburgerMenu';
import Menu from '../components/Menu';

function Navbar() {
	return (
		<nav
			id='nav'
			className=' fixed inset-x-0 z-10 flex justify-around p-4 align-middle bg-yellow-100 border-b-2 border-yellow-700'>
			<h1 className='text-4xl italic font-bold text-yellow-700'>The Wise Owl</h1>
			<Menu />
			<HamburgerMenu />
		</nav>
	);
}
export default Navbar;
