import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary align-items-center my-nav">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <Image className={'logo'} width={50} height={50} src={'/naim/md-naimul-hasan.jpg'} alt={'Photo of Md Naim UL Hasan'}/>
                    <span className={'logo-text'}>MD <span>NAIM</span> UL HASAN</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-0 ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="#">About Me</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                My Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">Frontend</Link></li>
                                <li><Link className="dropdown-item" href="#">Backend</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                My Portfolio
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">Frontend</Link></li>
                                <li><Link className="dropdown-item" href="#">Backend</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href={'/'} className="nav-link">Contact With Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
