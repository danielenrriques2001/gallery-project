import Link from 'next/link'
import React from 'react'

const Navigator = () => {
  return (
    <nav>
        <Link href='/'>Spotlight</Link>
        <Link href='/gallery'>Gallery</Link>
        <Link href='/favourites'>Favourites</Link>
        
    </nav>
  )
}

export default Navigator