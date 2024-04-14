import Image from 'next/image';
function Avatar({imgPath,width,height,alt}) {
	return (
		<Image
			src={imgPath || '/assets/images/logo.svg'}
			alt={alt||'image'}
			width={width||37}
			height={height||37}
			className='rounded-full cursor-pointer'

		/>
	);
}

export default Avatar;
