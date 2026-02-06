'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationProps {
    children?: ReactNode;
    delay?: number;
    className?: string;
    duration?: number;
}

export function SlideUpBlur({ children, delay = 0, className = '', duration = 0.8 }: AnimationProps) {
    return (
        <motion.div
            initial={{ y: 40, opacity: 0, filter: 'blur(5px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1] // Custom ease fitting high-end feel
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function SimpleFadeIn({ children, delay = 0, className = '', duration = 0.8 }: AnimationProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration, delay: delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
