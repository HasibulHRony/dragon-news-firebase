import React from 'react'
import { Link } from 'react-router'
export const NewsDetailsCard = ({news}) => {
  // console.log(news)
  return (
    <div className='p-4 bg-base-100 border rounded-sm shadow-sm'>
      <img src={news.image_url} className='w-full h-[350px] rounded-sm m-2 object-cover mx-auto'/>
      <h2 className="m-2 font-semibold text-xl mx-auto">{news.title}</h2>
      <p className='m-2 text-accent mx-auto'>{news.details}</p>
      <Link to={`/category/${news.category_id}`} className="text-base-100 bg-secondary px-3 py-2 my-4 mx-auto">All News In the category</Link>
    </div>
  )
}
