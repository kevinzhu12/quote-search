export function Quote({ quote, author }) {
    console.log({quote, author})
    return (
        <div>
            <p>
                {quote}
            </p>
            <p>
                {author}
            </p>
        </div>
    )
}