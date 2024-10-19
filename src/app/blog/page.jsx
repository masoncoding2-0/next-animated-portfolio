"use client"

import { motion } from "framer-motion";

const BlogPage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            Blog
        </motion.div>
    )
}

export default BlogPage