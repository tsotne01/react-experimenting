import React from 'react'

const CountryCard = ({ country }) => {
    const { name: { common }, flags: { svg } } = country;
    return (
        <div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src={svg} alt={common} />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {common}</h5>
                    </a>                    
                </div>
            </div>
        </div>
    )
}

export default CountryCard