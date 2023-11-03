import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

function newsletter() {

    return (

        <div className="relative isolate overflow-hidden bg-gray-900 sm:py-24 lg:py-32">
            <footer className="relative bg-blueGray-200 p-5 ">

                <div className="container mx-auto px-4 pt-20">
                    <div className="flex flex-wrap text-left lg:text-left">



                        <div className="max-w-xl lg:max-w-lg md:py-20 py-5">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300 w-[90%] md:w-[100%]">
                                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                                dolore.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-2">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 w-[90%] flex-auto rounded-md border-0 bg-white/5 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>




                        <div className="w-full lg:w-6/12">
                            <div className="flex flex-wrap items-top mb-6 pt-20">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-md font-bold mb-2 pb-3">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm" href="">Home</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm" href="">About Us</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm" href="">Demo</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm" href="">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 pt-10 lg:pt-0">
                                    <span className="block uppercase text-blueGray-500 text-md font-bold mb-2 pb-3">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm" href="/blog">Blog</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm" href="/termsandconditions">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm" href="/privacy">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm" href="/testimonials">Testimonials</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>



                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center py-10">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2023</span>
                                <a > 
                                    <a href="" className="text-blueGray-500 hover:text-blueGray-800"> QFlow</a>.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl w-xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-400 to-blue-700 opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}


export default newsletter
