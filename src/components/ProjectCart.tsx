import type { ReactElement, ReactNode } from "react";
import { Card, CardTitle } from "./ui/card";
import { TypoP, TypoInline, TypoList } from "./ui/typography";
import { Anthropic, JavaScript } from "developer-icons";
import type { ComponentType, SVGProps } from "react";
import type { DeveloperIconProps } from "developer-icons/dist/icon";

type IconComponent = (props: DeveloperIconProps) => ReactElement<DeveloperIconProps>;
type ProjectCardProps = {
    title: string,
    links: { label: string, href: string, icon?: string }[]
    body: React.ReactNode,
    techStack?: IconComponent[],
    infoList: React.ReactNode[]
    imageUrl: string | undefined,
} & { className?: string }
    & React.PropsWithChildren
    & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
    & React.HTMLAttributes<HTMLDivElement>

export function ProjectCard({ title, links, body, techStack, infoList, imageUrl, className, ...props }: ProjectCardProps) {
    return (
        <Card className={"border-2 border-dashed bg-background shadow-none p-4 pb-0 my-2 text-justify leading-relaxed relative h-90 gap-4 " + className} {...props}>
            <div className="flex flex-row justify-between w-full">
                <div>
                    <CardTitle>{title}</CardTitle>
                </div>
                <div className="flex flex-row gap-2 justify-center">
                    {links.map((link, index) =>
                        <>
                            <a href={link.href} aria-label={link.label} target="_blank" className="text-sm font-semibold cursor-pointer hover:text-accent">
                                {link.label}
                            </a>
                            {(index < links.length - 1) && <TypoInline className="text-sm"> • </TypoInline>}
                        </>
                    )}
                </div>
            </div>
            <div className="overflow-y-auto">
                {body}
                {infoList.length > 0 && (
                    <TypoList className="text-sm pt-2 mb-12 sm:mb-0">
                        {infoList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </TypoList>
                )}
            </div>
            {techStack && (
                <div className="flex flex-row gap-2 justify-end absolute bottom-2 right-8 rounded-lg bg-background/60 p-1">
                    {techStack.map((Techno, index) =>
                        <>
                            <Techno className="w-4 h-4 sm:w-6 sm:h-6" />
                            {(index < techStack.length - 1) && <TypoInline className="text-sm content-center"> • </TypoInline>}
                        </>
                    )}
                </div>
            )}
        </Card>
    )
};