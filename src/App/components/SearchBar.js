import React from 'react'

export default function SearchBar({placeholder, onChange}) {

    return (
        <div className='display m-b-2 w-100'>
            <div className='display w-100 p-l-1 border-r-1 border shadow h-3 white'>
                <div className='display w-100'>
                    <span className='display p-r-04'>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.9999 20.9999L16.6499 16.6499" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <input placeholder={placeholder} onChange={onChange} className='w-100 border-0'  />
                </div>
            </div>
        </div>
    )
}
