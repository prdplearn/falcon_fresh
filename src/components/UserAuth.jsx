import React from 'react'
import Image from 'next/image'
import { user_icon } from '@/assets/images'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from '@/serverActions/auth'
import Link from 'next/link'
import NavLink from './NavLink'


const UserAuth = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className='flex'>
                        <Image src={user_icon} width={30} height={30} alt='User Icon' className='lg:mr-3 inline-block w-[50px] xl:w-[30px]' />
                        <span className='hidden xl:inline'>Account</span> </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><NavLink href="/profile" label="Profile"/> </DropdownMenuItem>
                    <DropdownMenuItem><NavLink href="/orders" label="Orders"/> </DropdownMenuItem>
                    <DropdownMenuItem><NavLink href="/wishlist" label="Wishlist"/> </DropdownMenuItem>
                    <DropdownMenuItem>
                        <form action={logout}>
                            <button>   Logout</button>
                        </form>


                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default UserAuth
