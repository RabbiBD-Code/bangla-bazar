"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };
    await authClient.updateUser({
      ...newUserData,
    });
  };

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect('/')
        },
      },
    });
    toast.success('সাইন আউট সফল হয়েছেন')
  };

  return (
    <div className="max-w-7xl mx-auto mt-7">
      <div className="my-7">
        <h2 className="font-bold text-3xl">আমার প্রোফাইল</h2>
        <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      </div>
      <div className="flex justify-between items-center gap-9 border border-gray-300 p-4 rounded-xl">
        <div className="flex gap-4 items-center">
          <Image
            className="rounded-4xl object-cover"
            src={user?.image || "/profile.jpg"}
            width={50}
            height={50}
            alt={user?.name || "User avatar"}
            unoptimized
          />

          <div>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        </div>
        <div>
          <button onClick={handleSignOut} className="btn border border-red-500">↩ সাইন আউট</button>
        </div>
      </div>
      <div>
        <form onSubmit={handleUpdateProfile}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <h2>তথ্য</h2>

            <label className="label ">নাম</label>
            <input
              name="name"
              type="name"
              className="input w-md"
              placeholder=""
            />
            <label className="label ">ছবি</label>
            <input
              name="imgage"
              type="url"
              className="input w-md"
              placeholder="ছবি যুক্ত করুন"
            />
            <button type="submit" className="btn bg-green-500 w-md mt-4">
              আবডেট করুন
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
