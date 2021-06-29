import Link from 'next/link';

function HamburgerMenu() {
	function toggleDropdown() {
		document.querySelector('#dropdown').classList.toggle('hidden');
	}

	return (
		<div className='lg:hidden relative'>
			{/* HAMBURGER MENU */}
			<button onClick={toggleDropdown} className=' flex items-center h-full'>
				<img src='/bars-solid.svg' width={25} height={25} />
			</button>

			{/* DROPDOWN MENU */}
			<div
				id='dropdown'
				className=' absolute right-0 hidden w-48 text-yellow-700 bg-yellow-100 border-2 border-yellow-700'>
				<Link href={`/`}>
					<a className=' active:scale-95 hover:bg-yellow-300 block px-4 py-2 text-xl font-semibold cursor-pointer'>
						Generate Quotes
					</a>
				</Link>
				<Link href={`/quotes`}>
					<a className=' active:scale-95 hover:bg-yellow-300 block px-4 py-2 text-xl font-semibold cursor-pointer'>
						Saved Quotes
					</a>
				</Link>
			</div>
		</div>
	);
}
export default HamburgerMenu;
