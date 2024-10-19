"use client"

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({children}) => {

    const pathName = usePathname()

    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-orange-50 to-orange-100">
                <motion.div 
                    className="w-screen h-screen fixed rounded-b-[100px] bg-black z-40" 
                    animate={{ height:"0vh" }}
                    exit={{ height:"140vh" }}
                    transition={{ duration:0.5, ease:"easeOut" }}
                />
                <motion.div 
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit" 
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ height:"140vh" }}
                    transition={{ duration:0.8, ease:"easeOut" }}
                >
                    {pathName.substring(1, 2).toUpperCase() + pathName.substring(2)}
                </motion.div>
                <motion.div 
                    className="w-screen h-screen fixed rounded-t-[100px] bg-black bottom-0 z-30" 
                    initial = {{ height: "140vh"}}
                    animate= {{ height: "0vh", transition:{delay: 0.5} }}

                    
                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">{children}</div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider;