'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    animation?: 'fade-up' | 'fade-in' | 'scale-in';
}

export default function MotionWrapper({
    children,
    delay = 0,
    className = "",
    animation = 'fade-up'
}: MotionWrapperProps) {

    const variants = {
        'fade-up': {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
        },
        'fade-in': {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        'scale-in': {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            variants={variants[animation]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
