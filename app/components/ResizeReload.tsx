
"use client";

import { useEffect } from "react";

export default function ResizeReload() {
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");

        const handleChange = () => {
            window.location.reload();
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return null;
}
