import { ProjectCard } from "@/components/ProjectCart";
import { TypoP } from "@/components/ui/typography";
import { SvelteJS, MongoDB, NodeJs, JavaScript } from "developer-icons";

export function Chess42Card(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <ProjectCard
            {...props}
            className="w-full"
            title="42Chess"
            links={[]}
            body={
                <TypoP className="text-sm">
                    More to come very soon ...
                </TypoP>
            }
            techStack={[SvelteJS, JavaScript, NodeJs, MongoDB]}
            infoList={[
            ]}
            imageUrl={undefined}
        />
    );
}