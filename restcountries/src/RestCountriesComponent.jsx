import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useDeferredValue, useState } from 'react'
import CountryCard from './CountryCard';
import { queryClient } from './App';

const RestCountriesComponent = () => {
    const [query, setQuery] = useState("")


    const { isPending, data } = useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            return await fetch(`https://restcountries.com/v3.1/${query ? `name/${query}` : "all"}`).then((d) => d.json());
        },

    })


    const mutation = useMutation({
        mutationKey: "refetch",
        mutationFn: () => {
            queryClient.invalidateQueries(["countries"])
        }
    })

    const deferedData = useDeferredValue(data);

    if (isPending) {
        return <span className='text-6xl text-slate-600'>...loading</span>
    }
    return (
        <div className='flex flex-col w-full items-center  dark:bg-black'>

            <form onSubmit={(e) => {
                e.preventDefault();
                mutation.mutate();
            }} class="max-w-md mx-auto my-7">
                <label htmlFor="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={(e)=> setQuery(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Countries"  />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>
            <div className='w-[1440px] max-w-full h-full  flex items-center justify-center gap-5 flex-wrap'>
                {!!deferedData && deferedData.map((country) => (<CountryCard key={country.name.common} country={country} />))}
            </div>
        </div>
    )
}

export default RestCountriesComponent