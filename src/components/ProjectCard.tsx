import React, { Fragment } from "react";
import type { ReactElement } from "react";
import { Card, CardTitle } from "./ui/card";
import { TypoInline, TypoList } from "./ui/typography";
import type { DeveloperIconProps } from "developer-icons/dist/icon";
import { ScrollHintContainer } from "./HintScroll";
import type react from "react";
import type { LucideProps } from "lucide-react";

type IconComponent = (props: DeveloperIconProps) => ReactElement<DeveloperIconProps>;

type ProjectCardProps = {
    title: string,
    links: { label: string, href: string, icon?: IconComponent | react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>> }[]
    body: React.ReactNode,
    techStack?: IconComponent[],
    infoList: React.ReactNode[]
    imageUrl: string | undefined,
} & { className?: string }
    & React.PropsWithChildren
    & React.HTMLAttributes<HTMLDivElement>

export function ProjectCard({ title, links, body, techStack, infoList, imageUrl, className, ...props }: ProjectCardProps) {
    return (
        <Card className={"p-5 pb-0 my-2 gap-4 text-justify leading-relaxed relative " + className} {...props}>
            {/* <div className=" flex flex-col gap-4"> */}
            <div className="flex flex-row justify-between w-full">
                <div>
                    <CardTitle>{title}</CardTitle>
                </div>
                <div className="flex flex-row gap-2 justify-center">
                    {links.map((link, index) =>
                        <Fragment key={`${link.href}-${link.label}`}>
                            <a href={link.href} aria-label={link.label} target="_blank" key={`link-${index}`} className="text-sm font-semibold cursor-pointer hover:text-accent">
                                {link.icon && <link.icon className="w-4 h-4 sm:w-5 sm:h-5 inline mr-1 " />}
                                {!link.icon && link.label}
                            </a>
                            {/* {(index < links.length - 1) && <TypoInline className="text-sm"> • </TypoInline>} */}
                        </Fragment>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-4 pt-2 mb-12">
                <ScrollHintContainer scroll="vertical">
                    {body}
                    {infoList.length > 0 && (
                        <TypoList className="text-sm">
                            {infoList.map((item, index) => (
                                <li key={`list-${index}`}>{item}</li>
                            ))}
                        </TypoList>
                    )}
                </ScrollHintContainer>
            </div>
            {/* </div> */}
            {techStack && (
                <div className="flex flex-row gap-3 justify-end absolute bottom-2 right-8 rounded-lg bg-card/60 p-1">
                    {techStack.map((Techno, index) =>
                        <Techno className="w-4 h-4 sm:w-6 sm:h-6" key={`tech-${index}`} />
                    )}
                </div>
            )}
        </Card>
    )
};