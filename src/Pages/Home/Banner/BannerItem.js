import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
const {image,id,prev,next} =slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
               <div className='carousel_img'>
                  <img src={image} className="w-full rounded-xl" alt=" " />
               </div> 
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                   <h1 className='text-6xl text-white font-bold'>
                      Affordable<br/>
                      Price For Car<br/>
                      Servicing
                   </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2 mt-3">
                  <p className='text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint atque magni laudantium.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                   <button className="btn btn-active btn-secondary mr-5 px-7">Button</button>
                   <button className="btn btn-active btn-accent px-7">Button</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;