"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion, stagger } from "framer-motion";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/blog", title: "Blog" },
    { url: "/contact", title: "Contact" },
];

const socialLinks_black = [
    { url: "/", image: "/github.png", alt: "GitHub" },
    { url: "/", image: "/x.png", alt: "X" },
    { url: "/", image: "/instagram_b.png", alt: "Instagram" },
    { url: "/", image: "/threads_b.png", alt: "Threads" },
    { url: "/", image: "/linkedin_b.png", alt: "LinkedIn" },
    { url: "/", image: "/pinterest_b.png", alt: "Pinterest" },
    { url: "/", image: "/youtube_b.png", alt: "YouTube" },
    { url: "/", image: "/podcaster_b.png", alt: "Podcast" }
];

const socialLinks = [
    { url: "/", image: "/github_b.png", alt: "GitHub" },
    { url: "/", image: "/twitter.png", alt: "X" },
    { url: "/", image: "/instagram_c.png", alt: "Instagram" },
    { url: "/", image: "/threads_c.png", alt: "Threads" },
    { url: "/", image: "/linkedin.png", alt: "LinkedIn" },
    { url: "/", image: "/pinterest.png", alt: "Pinterest" },
    { url: "/", image: "/youtube.png", alt: "YouTube" },
    { url: "/", image: "/podcaster_c.png", alt: "Podcast" }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: { rotate: 0 },
        opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" }
    };

    const centerVariants = {
        closed: { opacity: 1 },
        opened: { opacity: 0 }
    };

    const bottomVariants = {
        closed: { rotate: 0 },
        opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" }
    };

    const listVariants = {
        closed: { x: "100vw" },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    };

    const listItemVariants = {
        closed: { x: -10, opacity: 0 },
        opened: { x: 0, opacity: 1 }
    }

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* LINKS */}
            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/*LOGO*/}
            <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link
                    href="/"
                    className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white mr-1">Juan Villamoros</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center ">
                        .dev
                    </span>
                </Link>
            </div>
            {/* SOCIAL */}
            <div className='hidden lg:flex md:flex gap-4 w-1/3'>
                {socialLinks_black.map((social, index) => (
                    <Link href={social.url} key={index}>
                        <Image src={social.image} alt={social.alt} width={30} height={30} />
                    </Link>
                ))}
            </div>
            {/*RESPONSIVE MENU*/}
            <div className='md:hidden'>
                {/* MENU BUTTON */}
                <button
                    className='w-10 h-8 flex flex-col justify-between z-50 relative'
                    onClick={() => setOpen(prev => !prev)}
                >
                    <motion.div
                        variants={topVariants}
                        className='w-10 h-1 bg-black rounded origin-left'
                        animate={open ? "opened" : "closed"}
                    />
                    <motion.div
                        variants={centerVariants}
                        className='w-10 h-1 bg-black rounded'
                        animate={open ? "opened" : "closed"}
                    />
                    <motion.div
                        variants={bottomVariants}
                        className='w-10 h-1 bg-black rounded origin-left'
                        animate={open ? "opened" : "closed"}
                    />
                </button>
                {/* MENU LIST */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'
                    >
                        {links.map((link) => (
                            <motion.div variants={listItemVariants} className="text-white" key={link.title}>
                                <Link href={link.url}>
                                    {link.title}
                                </Link>
                            </motion.div>
                        ))}
                        {/* SOCIAL ICONS BELOW THE MENU */}
                        <div className="flex gap-4 mt-8">
                            {socialLinks.map((social, index) => (
                                <Link href={social.url} key={index}>
                                    <motion.div
                                        variants={listItemVariants}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Image
                                            src={social.image}
                                            alt={social.alt}
                                            width={30}
                                            height={30}
                                        />
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

        </div>
    );
};

export default Navbar;
