import React from 'react'

const ProfileCard = () => {
    return (
        <>
            <div className="profile_Card">
                <div className="rounded-lg  pb-5 ">
                    <div className="relative mx-auto w-36 rounded-full">
                        <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                        <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                    </div>
                    <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">Pradeep Yadav</h1>
                    <h3 className="font-sm text-semibold text-center leading-6 text-gray-600">Marketing Exec. at Denva Corp</h3>
                    <ul className="mt-3 divide-y rounded-md bg-white  py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                        <li className="flex items-center py-3 text-sm">
                            <span>Status</span>
                            <span className="ml-auto"><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Active</span></span>
                        </li>
                        <li className="flex items-center py-3 text-sm">
                            <span>Joined On</span>
                            <span className="ml-auto">Apr 08, 2022</span>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default ProfileCard
