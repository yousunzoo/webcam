import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

function CheckImage({ dataUrl, handleReset }: { dataUrl: string; handleReset: () => void }) {
	const router = useRouter();
	return (
		<>
			<div className='flex items-center w-full h-[400px] bg-black'>
				<Image src={dataUrl} width={500} height={500} alt='촬영한 이미지' />;
			</div>
			<div className='flex justify-between px-10 pt-10'>
				<button
					className='flex justify-center items-center w-[120px] h-[30px] rounded-lg bg-emerald-400'
					onClick={handleReset}>
					다시 촬영하기
				</button>
				<button
					className='flex justify-center items-center w-[120px] h-[30px] rounded-lg bg-emerald-400'
					onClick={() => {
						router.push('/complete');
					}}>
					완료하기
				</button>
			</div>
		</>
	);
}

export default CheckImage;
