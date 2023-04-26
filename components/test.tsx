import Image from 'next/image';
import profilePic from '../public/next.svg';

export default function MyImage() {
  return (
    <>
      <Image src={profilePic as string} alt="Eli Elad Elrom" />
    </>
  );
}
