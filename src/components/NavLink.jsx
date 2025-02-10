"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({label, href}) => {
   const path = usePathname()
  return (
    <Link href={href} className={`${path===href ? "text-green-600":""}`}>
      {label}
    </Link>
  )
}

export default NavLink
