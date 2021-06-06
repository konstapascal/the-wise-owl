import Link from 'next/link';

function Menu() {
	return (
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
	);
}

export default Menu;
