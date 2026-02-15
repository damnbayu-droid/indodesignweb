'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // Defer loading to prioritize LCP and main thread
        const timer = setTimeout(() => {
            setShouldLoad(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!shouldLoad) {
        return (
            <div className={className} aria-hidden="true">
                {/* Placeholder to prevent layout shift if dimensions are fixed, or just empty */}
            </div>
        );
    }

    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            }
        >
            <Spline
                scene={scene}
                className={className}
            />
        </Suspense>
    )
}
