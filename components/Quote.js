function Quote({ id, content, author, deleteQuote }) {
	return (
		<>
			<div className=' flex flex-col my-10'>
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
			<hr className=' last:hidden mt-10 border-yellow-700 opacity-25' />
		</>
	);
}
export default Quote;
