'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function StorePage() {
  const router = useRouter()

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()

    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      window.location.href = `${process.env.NEXT_PUBLIC_IOS_TESTFLIGHT_URL}`;
    } else if (userAgent.includes('android')) {
      window.location.href = `${process.env.NEXT_PUBLIC_ANDROID_PLAYSTORE_URL}`;
    } else {
      router.push('/')
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-xl">Redirecting to store...</h1>
    </div>
  );
}
