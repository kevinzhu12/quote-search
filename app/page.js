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
    <main className=" font-inter font-medium min-h-screen bg-gradient-to-r from-white to-blue-200">
      <h1 className=" font-bold text-center text-4xl pt-14">
        quote search
      </h1>
      <p className=" font-normal text-center text-black">
        to find quotes faster and easier
      </p>

      <div id="content" className=" mx-auto flex-none w-3/5 md:justify-center pb-12">

        <form className=" bg-white relative mt-4 shadow-sm block rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">

          {/* search icon */}
          <div className=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 pr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>

          {/* search bar (text part) */}
          <input className=" bg-inherit w-full pl-1.5 focus:outline-none" type="text" placeholder="I want a quote about..." onChange={updateValue}></input>


        </form>

        {/* quotes and authors */}
        <div className=" text-black mt-4">
          {quotes.map((quote) => {
            return <Quote quote={quote.quote} author={quote.author} key={quote.quote} />
          })}
        </div>

      </div>
    </main>
  )
}
