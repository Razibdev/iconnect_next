import React from 'react'

export default function Sidebar() {
  return (
    <div>
        <div className="mb-4">
            <h4 className="font-medium text-xl mb-3">Category</h4>
            <div className="text-base list-none bg-white divide-y divide-gray-100 dark:bg-gray-700">
                <ul className="py-1">
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Business</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Consulting</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Corporate</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Startup</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Financel</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="mb-4">
            <h4 className="font-medium text-xl mb-3">Recent News</h4>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
            <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex-shrink-0">
                <img className="w-20 h-16" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="image" />
                </div>
                <div className="w-full ps-3">
                    <div className="text-gray-800 text-sm font-medium mb-1.5 dark:text-gray-400">New message from Hey, what is up? All set for the presentation?</div>
                    <div className="text-xs text-gray-400 dark:text-blue-500">04-jan-24 10:30 pm</div>
                </div>
            </a>
            <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex-shrink-0">
                <img className="w-20 h-16" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="image" />
                </div>
                <div className="w-full ps-3">
                    <div className="text-gray-800 text-sm font-medium mb-1.5 dark:text-gray-400">New message from Hey, what is up? All set for the presentation?</div>
                    <div className="text-xs text-gray-400 dark:text-blue-500">04-jan-24 10:30 pm</div>
                </div>
            </a>
            <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex-shrink-0">
                <img className="w-20 h-16" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="image" />
                </div>
                <div className="w-full ps-3">
                    <div className="text-gray-800 text-sm font-medium mb-1.5 dark:text-gray-400">New message from Hey, what is up? All set for the presentation?</div>
                    <div className="text-xs text-gray-400 dark:text-blue-500">04-jan-24 10:30 pm</div>
                </div>
            </a>
            </div>
        </div>

        <div className="mb-4">
            <h4 className="font-medium text-xl mb-3">Populer Tags</h4>
            <div className="flex flex-wrap gap-x-3 gap-y-3">
            <a href="#" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                Merketing
            </a>  
            <a href="#" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                Seo Online
            </a>  
            <a href="#" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                Designing
            </a>  
            <a href="#" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                Branding
            </a>  
            <a href="#" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                Development
            </a>  
            </div>
        </div>
    </div>
  )
}
