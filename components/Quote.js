export function Quote({ quote, author }) {
    console.log({ quote, author })
    return (
        <div className="block flex-none mx-auto p-2 m-6 md:justify-center rounded-sm bg-white border border-gray-200 shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-300">
            <p>
                "{quote}"
            </p>
            <p className=" text-blue-900 font-semibold">
                - {author}
            </p>
        </div>
    )
}