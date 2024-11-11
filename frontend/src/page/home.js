import React from 'react'

export default function HomePage() {
    const token = localStorage.getItem('jwtToken');
    return (
        <div className="flex flex-col min-h-screen">
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
                        {!token &&
                            <div className="space-x-4">
                                <a href="/auth/login" className="p-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 text-center">
                                    Sign In
                                </a>

                                <a href="/auth/register" className="p-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 border border-gray-300 text-center">
                                    Sign Up
                                </a>
                            </div>
                        }
                    </div>
                </section>
            </main>
        </div>
    )
}
