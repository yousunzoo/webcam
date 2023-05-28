'use client';
import Camera from '@/components/Camera';
import CheckImage from '@/components/CheckImage';
import Link from 'next/link';
import React, { useState } from 'react';

function CameraPage() {
	const [image, setImage] = useState('');
	const handleCapture = (dataUrl: string) => {
		setImage(dataUrl);
	};
	const handleReset = () => {
		setImage('');
	};
	return (
		<div className='bg-white '>
			<nav className='flex justify-between px-4 items-center h-16 bg-white text-black relative shadow-sm font-mono'>
				<Link href='/'>이전</Link>
			</nav>

			{image ? <CheckImage dataUrl={image} handleReset={handleReset} /> : <Camera onCapture={handleCapture} />}
		</div>
	);
}

export default CameraPage;
