'use client';
import { useState, useEffect } from 'react';
import PromptCardList from './PromptCardList';
const Feed = () => {
	const [searchText, setSearchText] = useState('');
	const [posts, setPosts] = useState([]);
	const handleTagClick = (e) => {};
	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
	};
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch('/api/prompt');
			const data = await response.json();
			setPosts(data);
		};
		fetchPosts();
	}, []);
	return (
		<section className='feed'>
			<form className='relative w-full flex-center'>
				<input
					type='text'
					placeholder='Search for a tag or username'
					value={searchText}
					onChange={(e) => handleSearchChange(e)}
					required
					className='search_input peer'
				/>
			</form>
			<PromptCardList data={posts} handleTagClick={handleTagClick} />
		</section>
	);
};

export default Feed;
