
"use client";

import { useState, useRef, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const [open, setOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const user = session?.user;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    setSigningOut(true);

    try {
      const result = await authClient.signOut();

      if (result.error) {
        toast.error("কিছু একটা সমস্যা হয়েছে");
        return;
      }
      toast.success("সাইন আউট সফল হয়েছেন")

      setOpen(false);
      router.push("/signin");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
    } finally {
      setSigningOut(false);
    }
  };

  if (isPending) {
    return (
      <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-200" />
    );
  }

  return (
    <div ref={menuRef} className="relative">
      {user ? (
        <>
          {/* Profile button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="flex items-center gap-3 rounded-xl p-2 hover:bg-gray-100"
          >
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 overflow-hidden rounded-full ring-2 ring-offset-2">
                <Image
                  alt={user.name || "User avatar"}
                  src={user.image || "/profile.jpg"}
                  width={40}
                  height={40}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <span className="font-medium text-gray-800">
              {user.name}
            </span>

            <span className="text-xs text-gray-500">
              {open ? "▲" : "▼"}
            </span>
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-full z-50 mt-3 w-[304px] rounded-[22px] border border-gray-200 bg-white p-6 shadow-xl">
              <h3 className="font-semibold text-gray-800">
                {user.name}
              </h3>

              <p className="mb-5 break-words text-sm text-gray-500">
                {user.email}
              </p>

              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="mb-4 flex items-center gap-2 text-gray-800 hover:text-green-700"
              >
                <span>👤</span>
                আমার প্রোফাইল
              </Link>

              <button
                type="button"
                disabled={signingOut}
                onClick={handleSignOut}
                className="flex w-full items-center gap-2 text-left text-red-500 hover:text-red-700 disabled:opacity-50"
              >
                <span>↩</span>
                {signingOut ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex gap-4">
          <Link
            href="/signin"
            className="rounded-lg p-2 hover:bg-gray-200"
          >
            সাইন ইন
          </Link>

          <Link href="/signup" className="btn btn-primary">
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
