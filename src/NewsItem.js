import React from "react";

const NewsItem =(props)=> {
    
    let {title,description,imageUrl,newsUrl,author, date}=props;
    return (
      <div class="my-3">
        <div class="card" style={{width: "20rem"}}>
          <img src={imageUrl?imageUrl:"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ad1425144dd44b6f30a7f559bc37a9f4.jpg"} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}<span class="badge text-bg-success">Latest</span></h5>
            <p class="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
