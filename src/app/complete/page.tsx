import Link from 'next/link';
import React from 'react';

function CompletePage() {
	return (
		<div className='flex flex-col w-full h-full text-center justify-center'>
			<p>이미지 업로드를 완료했습니다.</p>
			<Link className='w-[200px] text-lg rounded-lg py-2 mx-auto mt-[100px] bg-black text-white' href='/'>
				홈 화면으로
			</Link>
		</div>
	);
}

export default CompletePage;
