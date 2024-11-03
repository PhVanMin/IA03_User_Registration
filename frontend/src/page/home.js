import React from 'react'

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <a className="flex items-center justify-center" href="#">
                    <span className="sr-only">Web Dev</span>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 5V3" />
                        <path d="M18 12h2" />
                        <path d="M12 21v-2" />
                        <path d="M4 12H2" />
                        <path d="m19 3-3 3" />
                        <path d="m21 21-3-3" />
                        <path d="m3 3 3 3" />
                        <path d="m5 21 3-3" />
                        <circle cx="12" cy="12" r="4" />
                    </svg>
                </a>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="w-full px-4 md:px-6 flex flex-col items-center space-y-4 text-center gap-2">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Welcome to Web Dev
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                The all-in-one platform for your business needs. Sign up now and start your journey with us.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <a href="/auth/login" className="p-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 text-center">
                                Sign In
                            </a>

                            <a href="/auth/register" className="p-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 border border-gray-300 text-center">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}