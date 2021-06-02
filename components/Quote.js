import Image from 'next/image';

function Quote({ content, author }) {
	return (
		<div className='lg:flex-row flex flex-col justify-between my-8'>
			<div>
				<p className='max-w-2xl mb-2 text-xl'>{content}</p>
				<p> {`- ${author}`}</p>
			</div>
			<Image className='cursor-pointer' src='/trash-solid.svg' width={20} height={20} />
		</div>
	);
}
export default Quote;
