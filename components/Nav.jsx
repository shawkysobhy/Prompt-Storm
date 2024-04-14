'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Avatar from './Avatar';
const Nav = () => {
	const { data: session } = useSession();
	const [providers, setProviders] = useState(null);
	const [toggleDropDown, setToggleDropDown] = useState(false);
	useEffect(() => {
		const setProvidersHandler = async () => {
			const response = await getProviders();
			setProviders(response);
		};
		setProvidersHandler();
	}, []);
	return (
		<nav className='w-full pt-3 mb-16 flex-between '>
			<Link href='/' className='flex gap-2 flex-center'>
				<Avatar imgPath={'/assets/images/logo.svg'} width={30} height={30} />
				<p className='logo_text'>Prompts Storm</p>
			</Link>
			<div className='hidden sm:flex'>
				{session?.user ? (
					<div className='flex gap-3 md:gap-5'>
						<Link href='/create-prompt' className='black_btn'>
							Create Post
						</Link>
						<button
							type='button'
							onClick={() => signOut()}
							className='outline_btn'>
							Sign Out
						</button>
						<Link href='/profile'>
							<Avatar imgPath={session?.user?.image} />
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type='button'
									key={provider.name}
									onClick={() => signIn(provider.id)}
									className='black_btn'>
									Sign In
								</button>
							))}
					</>
				)}
			</div>
			<div className='relative flex sm:hidden'>
				{session?.user ? (
					<div className='flex'>
						<div
							onClick={() => {
								setToggleDropDown((prev) => !prev);
							}}>
							<Avatar imgPath={session?.user?.image} />
						</div>
						{toggleDropDown && (
							<div className='shadow-md dropdown'>
								<Link
									href='/profile'
									className='dropdown_link'
									onClick={() => setToggleDropDown(false)}>
									My Profile
								</Link>
								<Link
									href='/create-prompt'
									className='dropdown_link'
									onClick={() => setToggleDropDown(false)}>
									Create Propt
								</Link>
								<button
									type='button'
									className='w-full mt-5 black_btn'
									onClick={() => {
										setToggleDropDown(false);
										signOut();
									}}>
									Sign Out
								</button>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type='button'
									key={provider.name}
									onClick={() => signIn(provider.id)}
									className='black_btn'>
									Sign In
								</button>
							))}
					</>
				)}
			</div>
		</nav>
	);
};

export default Nav;
