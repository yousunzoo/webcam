import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-10'>
			<h1 className='text-4xl'>사진 찍기 기능 테스트</h1>
			<button className='text-lg rounded-lg px-4 py-2 mx-auto mt-[100px] bg-black text-white'>
				<Link href='/camera'>사진 촬영하러 가기</Link>
			</button>
		</main>
	);
}
