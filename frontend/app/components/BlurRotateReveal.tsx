'use client';

import { motion } from 'framer-motion';

interface BlurRotateRevealProps {
    text: string;
    className?: string;
    delay?: number;
    wordLevel?: boolean;
    enableBlur?: boolean;
    enableRotation?: boolean;
    staggerDuration?: number;
}

export default function BlurRotateReveal({
    text,
    className = '',
    delay = 0,
    wordLevel = false,
    enableBlur = true,
    enableRotation = true,
    staggerDuration = 0.08
}: BlurRotateRevealProps) {
    const items = wordLevel ? text.split(' ') : text.split('');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: staggerDuration, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: enableBlur ? 'blur(0px)' : 'none',
            rotateX: 0,
            transition: {
                type: 'spring' as const,
                damping: 25,
                stiffness: 45,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: enableBlur ? 'blur(10px)' : 'none',
            rotateX: enableRotation ? 45 : 0,
        },
    };

    return (
        <motion.span
            style={{ display: 'inline-block', perspective: '1000px' }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {items.map((item, index) => (
                <motion.span
                    variants={child}
                    style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
                    key={index}
                    className={wordLevel ? 'mr-[0.25em]' : ''}
                >
                    {item === ' ' ? '\u00A0' : item}
                </motion.span>
            ))}
        </motion.span>
    );
}
