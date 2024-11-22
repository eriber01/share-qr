import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex justify-center items-center h-screen my-5 sm:my-0'>
    <SignUp />
  </div>
}