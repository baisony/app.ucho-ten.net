'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function StorePage() {
  const router = useRouter()

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()

    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      window.location.href = 'https://apps.apple.com/app/ucho-ten/id6450390893'
    } else if (userAgent.includes('android')) {
      window.location.href = 'https://play.google.com/store/apps/details?id=net.ucho_ten.app'
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
