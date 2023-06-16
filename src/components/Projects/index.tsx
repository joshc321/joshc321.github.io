import Info from "@/components/Layouts/Info";
import Card from "@/components/Card";
import projectsData from "@/shared/jsons/projectsData.json"

export default function Projects() {
    return (
        <Info
            title={"projects"}
            id={"projects"}
        >
            <ol className="group/list">
                {
                    projectsData.map((data => (
                        <li key={data.title} className="mb-12">
                            <Card
                                timelineLabel={data.timelineLabel}
                                timeline={data.timeline}
                                linkTo={data.href}
                                title={data.title}
                                organization={data.organization}
                                otherTitles={data.othertitles}
                                description={data.description}
                                bullets={data.bullets}
                            />
                        </li>
                    )))
                }

            </ol>
        </Info>
    )
}