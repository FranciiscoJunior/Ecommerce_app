import React from "react";
import Sdata from "./Sdata";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const SlideCard = () => {

        const settings = {
            dots: true,
            Infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
    }
    
return (
    <>
        <Slider {...settings}>
            {Sdata.map((value, index) => {
            return (
                <div className='box d_flex top'>
                    <div className='left'>
                        <h1>{value.title}</h1>
                        <p>{value.desc}</p>
                        <button className='btn-primary'>Visit Collections</button>
                    </div>
                    <div className='right'>
                        <img src={value.cover} alt='' />
                    </div>
                </div>
            )
        })}
    </Slider>
    </>
    )
}

export default SlideCard