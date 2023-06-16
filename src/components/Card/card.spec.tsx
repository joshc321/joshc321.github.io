export interface CardSpec {
    timelineLabel: string,
    timeline: string,
    linkTo: string,
    title: string,
    organization: string,
    otherTitles?: string[] | null,
    description: string,
    bullets?: string[] | null
}