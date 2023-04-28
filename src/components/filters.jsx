import './filters.css'
import React from 'react'
import filtersLogo from '../img/filters.png'

export const Filters = () => {
  return (
    <section class="container">
        <h1 className='align'>Latest Posts</h1>
        <p className='align'> <img src={filtersLogo}/>Filter by Category</p>
        <div class="filters">
                <button class="active">All</button>
                <button>Artificial Intellegence</button>
                <button>Cloud Computing</button>
                <button>DevOps</button>
                <button>Programming Languages</button>
                <button>Mobile Application Development</button>
                <button>Technology and Tools</button>
                <button>Get a Job in a Tech Company</button>
                <button>Others</button>
        </div>
    </section>
  )
}
