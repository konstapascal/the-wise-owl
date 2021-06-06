function Quote({ id, content, author, deleteQuote }) {
	return (
		<div className=' my-8'>
			<div>
				<p className='max-w-2xl mb-2 text-xl'>{content}</p>
				<p> {`- ${author}`}</p>
			</div>

			<button
				className=' hover:bg-yellow-400 active:scale-95 px-4 py-2 mt-2 text-xl transform bg-yellow-300 cursor-pointer'
				onClick={() => deleteQuote(id)}>
				Delete
			</button>
		</div>
	);
}
export default Quote;
