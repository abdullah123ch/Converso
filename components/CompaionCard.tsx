
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button";


interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: string;
    color: string;
}

const CompaionCard = ({
    id,
    name,
    topic,
    subject,
    duration,
    color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{backgroundColor: color}}>
        <div className="flex items-center justify-between">
            <div className="subject-badge">
                {subject}
            </div>
            <div className="companion-bookmark">
                <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={12.5} />
            </div>
        </div>
        <h2 className="text-2xl font-semibold">{name}</h2> 
        <p className="text-lg">{topic}</p>
        <div className="flex items-center gap-2">
            <Image src="/icons/clock.svg" alt="lock" width={12.5} height={12.5} /> 
            <p className="text-sm">{duration} mins</p>
        </div>
        <Link href={`/companion/${id}`} className="w-full">
            <Button className="btn-primary w-full justify-center ">Chat Now</Button>
        </Link>
    </article>
  )
}

export default CompaionCard