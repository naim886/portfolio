"use client"
import React from 'react';
// @ts-ignore
import Slider from "react-slick";
import Image from "next/image";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider">
            <Slider {...settings}>
                <div className={'position-relative'}>
                    <Image
                        width={0}
                        height={0}
                        sizes={'100vw'}
                        src={'/slider/office-naim.webp'}
                        alt={'Office Time'}
                    />
                    <div className="content">
                        <h1>Working at Office</h1>
                    </div>
                </div>
                <div className={'position-relative'}>
                    <Image
                        width={0}
                        height={0}
                        sizes={'100vw'}
                        src={'/slider/math-olympiad-naim.webp'}
                        alt={'Office Time'}
                    />
                    <div className="content">
                        <h1>Receiving Prize from Chief Guest at 8th Undergraduate Mathematics olympiad 2016</h1>
                    </div>
                </div>
                <div className={'position-relative'}>
                    <Image
                        width={0}
                        height={0}
                        sizes={'100vw'}
                        src={'/slider/bitm-naim-ul-hasan.webp'}
                        alt={'Office Time'}
                    />
                    <div className="content">
                        <h1>Receiving Laravel Certificate from Trainer at BASIS Institute of Technology & Management
                            (BITM)</h1>
                    </div>
                </div>
                <div className={'position-relative'}>
                    <Image
                        width={0}
                        height={0}
                        sizes={'100vw'}
                        src={'/slider/royal-university-of-dhaka-md-naim-ul-hasan.webp'}
                        alt={'Office Time'}
                    />
                    <div className="content">
                        <h1>Receiving Winner Certificate from Vice Chancellor at Royal University Of Dhaka (IT
                            Festival)</h1>
                    </div>
                </div>
                <div className={'position-relative'}>
                    <Image
                        width={0}
                        height={0}
                        sizes={'100vw'}
                        src={'/slider/softrobotics-bangladesh-ltd-md-naim-ul-hasan.webp'}
                        alt={'Office Time'}
                    />
                    <div className="content">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1>Official Tour at Cox's Bazar </h1>
                    </div>
                </div>
                <div className={'position-relative'}>
                    <Image
                        width={0}
                        height={0}
                        sizes={'100vw'}
                        src={'/slider/upwork-huddle-dhaka-md-naim-ul-hasan.webp'}
                        alt={'Office Time'}
                    />
                    <div className="content">
                        <h1>Giving a speech at Upwork Huddle Dhaka</h1>
                    </div>
                </div>
                <div className={'position-relative'}>
                    <Image
                        width={0}
                        height={0}
                        sizes={'100vw'}
                        src={'/slider/award-naim.webp'}
                        alt={'Office Time'}
                    />
                    <div className="content">
                        <h1>Receiving crest from students at Bangladesh Korea Institute of Information and
                            Communication Technology (BKIICT)</h1>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HomeSlider;
