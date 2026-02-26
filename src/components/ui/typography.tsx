import React from "react"

type TypoParams = { className?: string } & React.PropsWithChildren

export function TypoH1({ className, children }: TypoParams) {
    return (
        <h1 className={"scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance " + className}>
            {children}
        </h1>
    )
}

export function TypoH2({ className, children }: React.PropsWithChildren & { className?: string, sx?: string }) {
    return (
        <h2 className={"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 " + className}>
            {children}
        </h2>
    )
}

export function TypoH3({ className, children }: TypoParams) {
    return (
        <h3 className={"scroll-m-20 text-2xl font-semibold tracking-tight " + className}>
            {children}
        </h3>
    )
}

export function TypoH4({ className, children }: TypoParams) {
    return (
        <h4 className={"scroll-m-20 text-xl font-semibold tracking-tight " + className}>
            {children}
        </h4>
    )
}

export function TypoP({ className, children }: TypoParams) {
    return (
        <p className={"leading-7 not-first:mt-6 " + className}>
            {children}
        </p>
    )
}

export function TypoInline({ className, children }: TypoParams) {
    return (
        <div className={"leading-7 not-first:mt-6 inline " + className}>
            {children}
        </div>
    )
}

export function TypoBlockquote({ className, children }: TypoParams) {
    return (
        <blockquote className={"mt-6 border-l-2 pl-6 italic " + className}>
            {children}
        </blockquote>
    )
}

export function TypographyList({ className, children }: TypoParams) {
    return (
        <ul className={"my-6 ml-6 list-disc [&>li]:mt-2 " + className}>
            {/* <li></li> [] */}
            {children}
        </ul>
    )
}
