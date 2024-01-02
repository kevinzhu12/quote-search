'use client'

import { debounce } from 'lodash';
import { useState } from 'react';
import { Quote } from '@/components/Quote';

export default function Home() {
  const [quotes, setQuotes] = useState([])

  //  This function is called each time there is change to input (letter, delete, etc.)
  const updateValue = debounce((e) => {

    console.log('called update value with ', e.target.value)
    const data = { input: e.target.value }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch("/quotes", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data })
        setQuotes(data.quotes)
      })
  }, 200)

  return (
    <main>
      <h1>
        Quote Search
      </h1>
      <h2>

      </h2>
      <form>
        <input type="text" placeholder="I want a quote about..." onChange={updateValue}></input>
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
      <div id="paragraph">
        {quotes.map((quote) => {
          return <Quote quote={quote.quote} author={quote.author} key={quote.quote} />
        })}
      </div>
    </main>
  )
}
