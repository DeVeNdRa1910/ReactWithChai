import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="relative w-full overflow-hidden py-10 bg-black border-t-2 border-t-zinc-900">
            <div className="relative text-white z-10 mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap -m-6">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="50px" />
                            </div>
                            <div>
                                <p className="text-sm">&copy; Copyright 2023. All Rights Reserved by DevUI.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white">Company</h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Features</Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Pricing</Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Affiliate Program</Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Press Kit</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white">Support</h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Account</Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Help</Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Contact Us</Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Customer Support</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white">Legals</h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Terms &amp; Conditions</Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-white hover:text-zinc-400" to="/">Licensing</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer