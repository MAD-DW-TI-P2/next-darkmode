'use client'

import { useContext } from 'react';

export default function Invitation({ params }: { params: { id: string } }) {
  


  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>My invitation: {params.id}</h1>
    </main>
  )
}