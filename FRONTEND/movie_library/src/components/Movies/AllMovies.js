import React from 'react'
import MovieItem from './MovieItem'

export default function AllMovies() {

  const items = [
    {image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/02/the-night-manager-01.jpg", 
     title: "Night Manager", text: "", alt: ""},
    {image:"https://assets.gadgets360cdn.com/pricee/assets/product/202301/Bholaa_1674473942.jpg",
     title: "Bholaa", text: "", alt: ""},
    {image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/pathaan-03.jpg", 
     title: "Pathaan", text: "", alt: ""},
    {image:"https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg", 
     title: "Jawan", text: "", alt: ""},

  ]

  return (
    <>
     <div className='container'>
  <div className="row justify-content-center">

    {items.map((item) => (
      <MovieItem key={item.id} image={item.image} title={item.title} text={item.text} alt={item.alt}/>
    )
    
    )}  
    
    </div>
      </div>
    </>
  )
}
