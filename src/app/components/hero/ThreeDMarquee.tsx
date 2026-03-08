"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type ImageData = {
    src: string;
    width: number;
    height: number;
};

export default function ThreeDMarquee({
    images,
    className,
}: {
    images: readonly ImageData[];
    className?: string;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: "100px",
                threshold: 0.1,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const chunkSize = Math.ceil(images.length / 4);
    const chunks = Array.from({ length: 4 }, (_, colIndex) => {
        const start = colIndex * chunkSize;
        return images.slice(start, start + chunkSize);
    });

    return (
        <div
            ref={containerRef}
            className={`mx-auto block h-[600px] max-sm:h-[400px] overflow-hidden rounded-t-[2.5rem] bg-white relative w-full ring-1 ring-gray-100 backdrop-blur-sm ${className || ""}`}
        >
            <div className="flex w-full h-full items-center justify-center">
                <div className="h-[1720px] w-[1720px] shrink-0 scale-[0.35] min-[375px]:scale-[0.4] min-[425px]:scale-[0.45] sm:scale-[0.55] md:scale-75 lg:scale-100 transition-transform duration-300">
                    <div
                        style={{
                            transform: "translateX(-2%) translateY(10%) rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
                            transformStyle: "preserve-3d",
                        }}
                        className="relative top-48 sm:top-72 md:top-96 right-[45%] sm:right-[50%] grid size-full origin-top-left grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
                    >
                        {chunks.map((subarray, colIndex) => (
                            <motion.div
                                animate={isVisible ? { y: colIndex % 2 === 0 ? 100 : -100 } : {}}
                                transition={{
                                    duration: colIndex % 2 === 0 ? 15 : 20,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "linear",
                                }}
                                key={colIndex + "marquee"}
                                className="flex flex-col items-start gap-8"
                                style={{ willChange: isVisible ? "transform" : "auto" }}
                            >
                                <GridLineVertical className="-left-4" offset="80px" />
                                {subarray.map((image, imageIndex) => (
                                    <div className="relative" key={imageIndex + image.src}>
                                        <GridLineHorizontal className="-top-4" offset="20px" />
                                        <motion.div
                                            whileHover={{ y: -10 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="relative aspect-[970/700] rounded-xl overflow-hidden ring-1 ring-gray-200 shadow hover:shadow-2xl hover:shadow-blue-500/20 bg-white"
                                            style={{ transform: "translateZ(0)" }}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={`Portfolio image ${imageIndex + 1}`}
                                                width={970}
                                                height={700}
                                                loading="lazy"
                                                sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 400px"
                                                className="object-cover w-full h-full"
                                                quality={75}
                                                placeholder="blur"
                                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                                            />
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const GridLineHorizontal = ({ className, offset }: { className?: string; offset?: string }) => {
    return (
        <div
            style={
                {
                    "--background": "#ffffff",
                    "--color": "rgba(0, 0, 0, 0.05)",
                    "--height": "1px",
                    "--width": "5px",
                    "--fade-stop": "90%",
                    "--offset": offset || "200px",
                    maskComposite: "exclude",
                } as React.CSSProperties
            }
            className={`absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 ${className || ""}`}
        ></div>
    );
};

const GridLineVertical = ({ className, offset }: { className?: string; offset?: string }) => {
    return (
        <div
            style={
                {
                    "--background": "#ffffff",
                    "--color": "rgba(0, 0, 0, 0.05)",
                    "--height": "5px",
                    "--width": "1px",
                    "--fade-stop": "90%",
                    "--offset": offset || "150px",
                    maskComposite: "exclude",
                } as React.CSSProperties
            }
            className={`absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 ${className || ""}`}
        ></div>
    );
};
