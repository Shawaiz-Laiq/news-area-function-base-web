import React, { useState } from 'react'
function NewsFeed (props) {
  const [hidden, sethidden] = useState(false)
  

  const hiden = () => {
     sethidden((prev) => !prev);
  };
   
   let {author, title, description, url, urlToImage, publishedAt, content} = props
   
   return (
          
          <div className="row my-3">
            <div className="col-12 col-md-3">  
                <a href={urlToImage} target="_blank" rel="noopener noreferrer"><img
                src={urlToImage  || "https://thediplomat.com/wp-content/uploads/2026/03/sizes/td-story-s-2/thediplomat_2026-03-16-211614.jpg"}
                alt={"1" || "News image"}
                loading="lazy"
                url={urlToImage}
                className="img-fluid w-100"
                style={{ height: "150px" , objectFit: "cover", backgroundColor:"black", }}
                onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src ="https://thediplomat.com/wp-content/uploads/2026/03/sizes/td-story-s-2/thediplomat_2026-03-16-211614.jpg";}}
                /></a>
            </div>
            <div className="col-12 col-md-9">
                <h1 style={{fontSize:"2rem"}}>{title}</h1>
                <p>{description} 
                    <span
              style={{ color: 'blue', cursor: 'pointer' }}
              onClick={hiden}
            >
              {hidden ? ' Read less' : ' Read more'}
            </span>
          </p>

          {hidden && (
            <p>
              {content} <a href={url} target="_blank" rel="noreferrer">click here to read on website</a>
            </p>
          )}
            </div>
            <div className='d-flex justify-content-between'>
                <h6 className="my-1">Author {author}</h6>
                <p>{publishedAt}</p>
                

            </div>
            <hr />
        </div>

    )
}
export default NewsFeed;