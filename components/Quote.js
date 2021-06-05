function Quote({ id, content, author, deleteQuote }) {
	return (
		<div className='lg:flex-row flex flex-col justify-between my-8'>
			<div>
				<p className='max-w-2xl mb-2 text-xl'>{content}</p>
				<p> {`- ${author}`}</p>
			</div>
			<img
				onClick={() => deleteQuote(id)}
				className='cursor-pointer'
				src='/the-wise-owl/trash-solid.svg'
				width={20}
				height={20}
			/>
		</div>
	);
}
export default Quote;
