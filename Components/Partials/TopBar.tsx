import React from 'react';
import Link from "next/link";

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container-fluid">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center text-md-start">
                            <Link href={'tel:+8801711980213'}> <i
                                className="fa-solid fa-square-phone"></i> +8801711980213</Link> |
                            <Link href={'mailto:naim886@gmail.com'}> <i
                                className="fa-solid fa-square-envelope"></i> naim886@gmial.com</Link>
                        </div>
                        <div className="col-md-5 d-none d-md-flex text-center">
                            Full Stack Web Application Developer (Laravel, Next.js)
                        </div>
                        <div className="col-md-3 text-center text-md-end">
                            <div className="social">
                                <Link href={'/'}> <i className="fa-brands fa-square-facebook"></i></Link>
                                <Link href={'/'}> <i className="fa-brands fa-square-twitter"></i></Link>
                                <Link href={'/'}> <i className="fa-brands fa-linkedin"></i></Link>
                                <Link href={'/'}> <i className="fa-brands fa-square-whatsapp"></i></Link>
                                <Link href={'/'}> <i className="fa-brands fa-square-instagram"></i></Link>
                                <Link href={'/'}> <i className="fa-brands fa-square-youtube"></i></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
