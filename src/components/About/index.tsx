import Info from "@/components/Layouts/Info";

export default function About() {
    return (
        <Info
            title={"about"}
            id={"about"}
        >
            <p className="mb-4">
                I&apo;sve always had a curiosity for understanding the inner workings
                of everyday objects since a young age. Over time I have developed
                new skills to better understand the world around me. Many of my
                current and past projects are a way for me to build upon this.
            </p>
            <p className="mb-4">
                My main focus these days is building efficient applications that
                combine techniques from large data management and storage to
                efficient algorithms to retrieve and interpret this data in a
                personalized fashion.
            </p>
            <p>
                Outside of this I enjoy going on hikes, cooking new things,
                or just hanging out with friends.
            </p>
        </Info>
    )
}