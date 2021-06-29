import Link from 'next/link';

function HamburgerMenu() {
	function toggleDropdown() {
		document.querySelector('#dropdown').classList.toggle('hidden');
	}

	return (
		<div className='md:hidden relative'>
			{/* HAMBURGER MENU */}
			<button onClick={toggleDropdown} className=' flex items-center h-full'>
				<img src='/bars-solid.svg' width={25} height={25} />
			</button>

			{/* DROPDOWN MENU */}
			<div
				id='dropdown'
				className=' absolute right-0 hidden w-64 overflow-hidden text-center text-yellow-700 bg-yellow-100 border-2 border-yellow-700 rounded-md shadow-lg'>
				<Link href={`/`}>
					<a
						onClick={toggleDropdown}
						className=' hover:bg-yellow-200 block py-4 text-xl font-semibold cursor-pointer'>
						Generate Quotes
					</a>
				</Link>
				<Link href={`/quotes`}>
					<a
						className=' hover:bg-yellow-200 block py-4 text-xl font-semibold cursor-pointer'
						onClick={toggleDropdown}>
						Saved Quotes
					</a>
				</Link>
			</div>
		</div>
	);
}
export default HamburgerMenu;
