import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {url: '/search', text: 'All'},
    {url: '/news', text: 'News'},
    {url: '/images', text: 'Images'},
    {url: '/videos', text: 'Videos'}
]

const Links = () => {
    return (
        <div className="flex sm:justify-around items-center justify-between mt-4 space-x-5">
            {links.map(({url, text})=>(
                <NavLink to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
                    {text}
                    </NavLink>
            ))}
        </div>
    )
}

export default Links
