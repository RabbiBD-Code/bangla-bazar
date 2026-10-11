"use client"

import { authClient } from "@/lib/auth-client";
import { string } from "better-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";


const SignUpPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries()) as {name: string, email: string, image: string, password: string}
        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        })
        if(data){
            toast.success(`data.user.name, "success login"`)
            redirect('/')
        }
        if(error){
            toast.error(error.message || "Something went wrong");
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
        <h2 className="font-bold text-3xl">অ্যাকাউন্ট তৈরি করুন</h2>
        <p>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
         
          <label className="label ">নাম</label>
          <input name="name" type="name" className="input w-md" placeholder="যেমন: রহিম উদ্দিন" />
          <label className="label ">ছবি</label>
          <input name="imgage" type="url" className="input w-md" placeholder="ছবি যুক্ত করুন" />
          <label className="label ">ইমেইল</label>
          <input name="email" type="email" className="input w-md" placeholder="you@example.com" />

          <label className="label ">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />
          <label className="label ">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input name="password" type="password" className="input w-md" placeholder="আবার লিখুন" />

          <button type="submit" className="btn bg-green-500 w-md mt-4">অ্যাকাউন্ট তৈরি করুন</button>
        </fieldset>
      </form>
      <hr className='my-5'/>
              <div className='flex items-center justify-center gap-4'>
                  <button onClick={handleGoogleSignIn} className='btn'><p className='flex items-center gap-4'><span><FaGoogle /></span>Google দিয়ে চালিয়ে যান</p></button>
              <button onClick={handleGithubSignIn} className='btn'><p className='flex items-center gap-4'><span><FaGithub /></span>GitHub দিয়ে চালিয়ে যান</p></button>
              </div>
              <p className='flex justify-center mt-5'>অ্যাকাউন্ট আছে? <Link className='text-blue-700' href='/signin'>সাইন ইন করুন</Link></p>
              <Link className='my-4 flex justify-center' href='/'>← হোম পেজে ফিরে যান</Link>
    </div>
  );
};

export default SignUpPage;
