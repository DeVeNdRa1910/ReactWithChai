import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-orange-500",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-6 py-2 active:scale-95 font-semibold text-xl rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
