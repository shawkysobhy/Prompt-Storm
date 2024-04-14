import Link from 'next/link';
function Form({ type, post, setPost, submitting, handleSubmit }) {
	return (
		<section className='flex-col w-full max-w-full flex-start'>
			<h1 className='text-left head_text'>
				<span className='blue_gradient'>{type} Post</span>
			</h1>
			<p className='max-w-md text-left desc'>
				{type} and share amazing prompts with the world, and let your
				imagination run wild with and AI-powered platform.
			</p>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism'>
				<label>
					<span className='text-base font-semibold text-gray-700 font-satoshi'>
						Your Ai Propmpt
					</span>
					<textarea
						placeholder='write your prompt here'
						className='form_textarea'
						value={post.prompt}
						onChange={(e) => setPost({ ...post, prompt: e.target.value })}
					/>
				</label>
				<label>
					<span className='text-base font-semibold text-gray-700 font-satoshi'>
						Tag <span>{'#product,#web'}</span>
					</span>
					<input
						placeholder='write your tag here'
						className='form_input'
						value={post.tag}
						onChange={(e) => setPost({ ...post, tag: e.target.value })}
					/>
				</label>
        <div className='gap-4 mx-3 mb-5 flex-end'>
          <Link href="/" className='text-sm text-gray-500'>
            Cancel
          </Link>
          <button type='submit' disabled={submitting} className='px-5 py-1.5 text-sm rounded-full text-white bg-primary-orange'>
            {submitting?`${type}...`:type}
          </button>
        </div>
			</form>
		</section>
	);
}

export default Form;
