'use client';
import { useRef, useState, useEffect } from 'react';
import { GrGallery } from 'react-icons/gr';
type CameraProps = {
	onCapture: (dataUrl: string) => void;
};

const Camera: React.FC<CameraProps> = ({ onCapture }) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const [stream, setStream] = useState<MediaStream | null>(null);

	useEffect(() => {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			const initializeCamera = async () => {
				try {
					const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
					setStream(mediaStream);

					if (videoRef.current) {
						videoRef.current.srcObject = mediaStream;
						videoRef.current.play();
					}
				} catch (error) {
					console.error('Error accessing camera:', error);
				}
			};

			initializeCamera();
		}
	}, []);

	const captureImage = () => {
		if (videoRef.current) {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');

			if (context && videoRef.current.videoWidth && videoRef.current.videoHeight) {
				canvas.width = videoRef.current.videoWidth;
				canvas.height = videoRef.current.videoHeight;
				context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

				const dataUrl = canvas.toDataURL('image/png');
				onCapture(dataUrl);
			}
		}
	};

	const handleFileSelect = () => {
		if (inputRef.current?.files && inputRef.current.files.length > 0) {
			const file = inputRef.current.files[0];
			const reader = new FileReader();

			reader.onload = () => {
				const dataUrl = reader.result as string;
				onCapture(dataUrl);
			};

			reader.readAsDataURL(file);
		}
	};

	useEffect(() => {
		return () => {
			if (stream) {
				stream.getTracks().forEach((track) => track.stop());
			}
		};
	}, [stream]);

	return (
		<div>
			<div className='flex items-center w-full h-[400px] bg-black'>
				<video ref={videoRef} />
			</div>
			<div className='relative flex w-full pt-12 px-10'>
				<label htmlFor='gallery' className='block w-[60px] h-[60px] text-5xl'>
					<GrGallery />
				</label>
				<input
					id='gallery'
					type='file'
					accept='image/*;capture=camera'
					className='hidden'
					ref={inputRef}
					onChange={handleFileSelect}
				/>
				<button
					className='absolute left-0 right-0 mx-auto block w-[60px] h-[60px] rounded-full border-black border-[6px] text-[0px]'
					onClick={captureImage}>
					사진 촬영
				</button>
			</div>
		</div>
	);
};

export default Camera;
