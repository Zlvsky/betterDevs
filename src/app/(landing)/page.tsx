'use client'

import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  if (session) console.log('logged in')

  return (
    <>
      <button onClick={() => signIn('google')}>Sign in with google</button>
      <button onClick={() => signIn('github')}>Sign in with github</button>
    </>
  )
}
