'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SignInPape = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) =>{
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const user = Object.fromEntries(formData.entries()) as { email: string, password: string}
            const { data, error } = await authClient.signIn.email({
                ...user,
                callbackURL: "/"
            })
            if(data){
                toast.success(data.user.name)
                
            }
            if(error){
                toast.error("Something is wrong")
            }
        }

    const handleGoogleSignIn = async() =>{
        const data = await authClient.signIn.social({
    provider: "google",
  });
    }

    const handleGithubSignIn = async()=>{
        const data = await authClient.signIn.social({
        provider: "github"
    })
    }

    return (
        <div className="flex flex-col items-center space-y-3 justify-center mt-5">
        <h2 className="font-bold text-3xl">সাইন ইন</h2>
        <p>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
         
         
          <label className="label ">ইমেইল</label>
          <input name="email" type="email" className="input w-md" placeholder="you@example.com" />

          <label className="label ">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />

          <button className="btn bg-green-500 w-md mt-4">সাইন ইন</button>
        </fieldset>       
      </form>
      <hr className='my-5'/>
        <div className='flex items-center justify-center gap-4'>
            <button onClick={handleGoogleSignIn} className='btn'><p className='flex items-center gap-4'><span><FaGoogle /></span>Google দিয়ে চালিয়ে যান</p></button>
        <button onClick={handleGithubSignIn} className='btn'><p className='flex items-center gap-4'><span><FaGithub /></span>GitHub দিয়ে চালিয়ে যান</p></button>
        </div>
        <p className='flex justify-center mt-5'>অ্যাকাউন্ট আছে? <Link className='text-blue-700' href='/signin'>সাইন ইন করুন</Link></p>
    </div>
    );
};

export default SignInPape;