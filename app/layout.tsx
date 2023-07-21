import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '@/style/style.scss'
import Script from "next/script";
import Link from "next/link";
import TopBar from "@/Components/Partials/TopBar";
import Image from "next/image";
import Nav from "@/Components/Partials/Nav";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Welcome | Md Naim UL Hasan',
    description: 'I am a fullstack web developer',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                  crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                  integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                  crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        </head>
        <body className={inter.className}>
        <TopBar/>
        <Nav/>


        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                crossOrigin="anonymous"></Script>
        </body>
        </html>
    )
}
