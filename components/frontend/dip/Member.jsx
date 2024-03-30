import React from 'react';
import Card from "@/components/frontend/dip/member/Card";

export default function Member() {
  return (
    <div>
        <div className="bg-gray-100">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
                <div className="heading mb-6">
                  <svg class="w-10 h-10 text-gray-800 dark:text-white mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"/>
                  </svg>
                  <h2 className="text-3xl font-semibold mb-2">Our Member</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Our web developers have an uncanny ability to bring complex web designs to life. We build for the future.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4">
                    
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>

                </div>
            </div>
        </div>
    </div>
  )
}
