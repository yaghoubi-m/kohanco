'use client';

import Image from 'next/image';
import {FiPhoneCall} from 'react-icons/fi';
import {PiCaretDownThin} from 'react-icons/pi';
import styles from './Header.module.css';
import Link from 'next/link';
import {IoMenuSharp} from 'react-icons/io5';
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import axios from 'axios';

export default function Header({title}) {
    const [menu, setMenu] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const router = usePathname();
    const getImageUrl = async () => {
        const baseurl = 'http://www.dev.kohanco.com';

        if (router === '/') {
            try {
                const response = await axios.get(`${baseurl}/api/Home/GetHomePageMainHeader`);
                setImgUrl(response.data.slice(1, -1));
            } catch (e) {
                console.log(e);
            }
        } else if (router === '/projects') {
            try {
                const response = await axios.get(`${baseurl}/api/Project/projectMainHeaderImg`);
                setImgUrl(response.data.slice(1, -1));
            } catch (e) {
                console.log(e);
            }
        } else if (router === '/blogs') {
            try {
                const response = await axios.get(`${baseurl}/api/Blog/GetBlogHeaderImg`);
                setImgUrl(response.data.slice(1, -1));
            } catch (e) {
                console.log(e);
            }
        } else if (router === '/catalog') {
            try {
                const response = await axios.get(
                    `${baseurl}/api/Catalog/GetCatalogsMainHeaderImage`,
                );
                setImgUrl(response.data.slice(1, -1));
            } catch (e) {
                console.log(e);
            }
        } else if (router === '/about-us') {
            try {
                const response = await axios.get(
                    `${baseurl}/api/AboutUs/homepageAboutUsMainHeaderImg`,
                );
                setImgUrl(response.data.slice(1, -1));
            } catch (e) {
                console.log(e);
            }
        } else if (router === '/contact-us') {
            try {
                const response = await axios.get(
                    `${baseurl}/api/ContactUs/GetContactUSMainHeaderImg`,
                );
                setImgUrl(response.data.slice(1, -1));
            } catch (e) {
                console.log(e);
            }
        } else if (router === '/faq') {
            try {
                const response = await axios.get(`${baseurl}/api/FAQ/GetFAQMainHeaderImg`);
                setImgUrl(response.data.slice(1, -1));
            } catch (e) {
                console.log(e);
            }
        }
    };

    useEffect(() => {
        getImageUrl();
    }, [router]);
    console.log(router)
    return (
        <section
            className={styles.banner}
            style={{
                background: ` linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(27,27,27,0.01) 100%),
        url('${imgUrl}') 0 0 /cover no-repeat `,
                // backgroundSize: 'cover',
            }}
        >
            <header className={styles.header}>
                <div className={styles.pc}>
                    <div className={styles.address_container}>
                        <Link href={'tel:02137596'} className={styles.header_number}>
                            <FiPhoneCall className={styles.header_number__icon}/>
                            <span>02137596</span>
                        </Link>
                        <p className={styles.header_address}>
                            Unit 201, Aria Building, Abazar Boulevard, Ayatollah Kashani Street, Tehran, Iran
                        </p>
                        <div className={styles.header_line}></div>
                    </div>
                    <nav className={styles.navbar}>
                        <IoMenuSharp
                            className={styles.ham}
                            onClick={() => {
                                setMenu((p) => !p);
                                console.log(menu);
                            }}
                        />

                        <ul className={`${styles.nav_links} ${menu ? styles.nav_links_open : ''}`}>
                            <li>
                                <Link href="/" style={{
                                    borderBottom: `${router === '/' ? '2px solid #FFF' : ''}`
                                }} className={styles.link}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" style={{
                                    borderBottom: `${router === '/projects' ? '2px solid #FFF' : ''}`
                                }} className={styles.link}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs" style={{
                                    borderBottom: `${router === '/blogs' ? '2px solid #FFF' : ''}`
                                }} className={styles.link}>
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="/catalog" style={{
                                    borderBottom: `${router === '/catalog' ? '2px solid #FFF' : ''}`
                                }} className={styles.link}>
                                    Catalog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" style={{
                                    borderBottom: `${router === '/about-us' ? '2px solid #FFF' : ''}`
                                }} className={styles.link}>
                                    About US
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" style={{
                                    borderBottom: `${router === '/contact-us' ? '2px solid #FFF' : ''}`
                                }} className={styles.link}>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" style={{
                                    borderBottom: `${router === '/faq' ? '2px solid #FFF' : ''}`
                                }} className={styles.link}>
                                    faq
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.header_line__two}></div>
                <p className={styles.banner_title}>{title}</p>
                <Image
                    className={styles.header_logo}
                    width={100}
                    height={100}
                    src="/images/KohanLogo.png"
                    alt="logo"
                    // priority={false}
                />
            </header>
            <Link href="#a" className={styles.explore}>
                <span>EXPLORE</span>
                <PiCaretDownThin className={styles.explore_icon}/>
            </Link>
        </section>
    );
}
