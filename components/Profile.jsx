import PromptCard from './PromptCard';
function Profile({ name, desc, data, handleDelete, handleEdit }) {
	console.log(name);
	return (
		<section className='w-full '>
			<h1 className='text-left head_text'>
				<span className='blue_gradient'>{name}Profile</span>
			</h1>
			<p className='font-bold text-left desc'>{desc}</p>
			<div className='mt-16 prompt_layout'>
				{data?.map((post) => {
					return (
						<PromptCard
							key={post._id}
							post={post}
							handleEdit={() => handleEdit && handleEdit(post)}
							handleDelete={() => handleDelete && handleDelete(post)}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Profile;
