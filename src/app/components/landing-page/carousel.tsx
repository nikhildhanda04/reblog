
import React from 'react';

const categories = [
    { name: 'FOOD', icon: <BowlIcon /> },
    { name: 'TRAVEL', icon: <BagIcon /> },
    { name: 'LIFESTYLE', icon: <StarIcon /> },
    { name: 'TECH', icon: <CameraIcon /> },
    { name: 'FINANCE', icon: <ChartIcon /> },
    { name: 'HEALTH', icon: <HeartIcon /> },
];

export default function Carousel() {
    return (
        <div className="w-[calc(100vw-6rem)] bg-black text-white overflow-hidden py-3 border-y border-black">
            <div className="flex animate-marquee whitespace-nowrap">
             
                {[...categories, ...categories, ...categories, ...categories].map((cat, index) => (
                    <div key={index} className="flex items-center gap-12 mx-6">
                        <div className="flex items-center gap-2">
                            {cat.icon}
                            <span className="font-mono text-sm tracking-wider font-medium">{cat.name}</span>
                        </div>
                        <span className="text-white/30">|</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function BowlIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 2C7.5 2 4 4.5 4 8C4 11.5 7.5 14 12 14C16.5 14 20 11.5 20 8C20 4.5 16.5 2 12 2ZM12 4C15.5 4 18 6 18 8C18 10 15.5 12 12 12C8.5 12 6 10 6 8C6 6 8.5 4 12 4ZM2 16V18H22V16H2Z" />
        </svg>
    )
}

function BagIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M8 4V6H5V20H19V6H16V4H8ZM14 6V4H10V6H14Z" />
        </svg>
    )
}

function StarIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
    )
}

function CameraIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M4 6V20H20V6H17L15 4H9L7 6H4ZM9 13C9 11.34 10.34 10 12 10C13.66 10 15 11.34 15 13C15 14.66 13.66 16 12 16C10.34 16 9 14.66 9 13Z" />
        </svg>
    )
}

function ChartIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M3 3V21H21V18H6V3H3ZM10 17V10H12V17H10ZM14 17V7H16V17H14ZM18 17V12H20V17H18Z" />
        </svg>
    )
}

function HeartIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
        </svg>
    )
}
