function Quote({ id, content, author, deleteQuote }) {
	return (
		<div className=' first:mt-0 last:mb-0 my-14 flex flex-col'>
			<div className='mb-6 font-semibold text-center'>
				<p className=' mb-4 text-xl italic'>{`"${content}"`}</p>
				<p className='opacity-90'> {`- ${author}`}</p>
			</div>

			<button
				className=' hover:bg-yellow-300 active:scale-95 text-md self-center w-32 px-4 py-2 font-semibold transform bg-yellow-200 rounded-md shadow-lg cursor-pointer'
				onClick={() => deleteQuote(id)}>
				Delete
			</button>
		</div>
	);
}
export default Quote;
