
const features = [


    { name: 'Convenience', description: 'Let customers get their orders out of the way and wait where they are comfortable- out of the queue' },
    { name: 'Efficiency', description: 'Get more done. With fewer orders being taken, more time is spent making what the customer wants.' },
    { name: 'Reviews', description: 'With an option to leave google reviews, Your online presence will grow and more people will interact with your shop.' },
    { name: 'FeedBack', description: 'More feedback streamlines your progress, making you better, faster and more popular' },
    { name: 'Tips', description: 'We make tipping simple and we get you 10000% more! Customers can tip afterwards too!' },
    { name: 'Order Size', description: 'Your customers get all the time they need to make their important decisions, and add all the extras they want!' },
]


//orders are never wrong
//loyalty?


export default function specs() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 order-2 md:order-1">
                    <img
                        src="https://i.pinimg.com/originals/76/78/f5/7678f5be76d3bc65acea732f0e06c9f9.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://i.pinimg.com/originals/76/78/f5/7678f5be76d3bc65acea732f0e06c9f9.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://i.pinimg.com/originals/76/78/f5/7678f5be76d3bc65acea732f0e06c9f9.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://i.pinimg.com/originals/76/78/f5/7678f5be76d3bc65acea732f0e06c9f9.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
                <div className="md:order-1">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Customers get more, So you can too!</h2>
                    <p className="mt-4 text-gray-500">
              REEEEEE
            </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

            </div>
        </div>
    )
}