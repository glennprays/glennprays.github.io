'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export function ThemeSwicher() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    const isDark = resolvedTheme === 'dark';

    const toggleSwitch = () => setTheme(isDark ? 'light' : 'dark');

    return (
        <div id="theme-switcher" className={('w-14 border-black bg-slate-400 rounded-full flex items-center cursor-pointer ' + (isDark ? 'justify-start' : 'justify-end'))} onClick={toggleSwitch}>
            <motion.div
                className="bg-gradient-to-r from-amber-500 via-amber-300 to-amber-200 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600  w-7 h-7 rounded-full shadow-md flex items-center justify-center"
                layout
                transition={spring}
            >
                {isDark ? <MdOutlineDarkMode className="text-white" /> : <MdOutlineLightMode className="text-black" />}
            </motion.div>
        </div>
    )
}

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};