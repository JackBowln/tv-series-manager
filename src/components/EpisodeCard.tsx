import { Episode } from "@/types"
import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EpisodeDetails from "@/components/EpisodeDetails"

type Props = { episode: Episode }
const EpisodeCard: React.FC<Props> = ({ episode }: Props) => {

  return (
    <Dialog>
      <DialogTrigger asChild={true}>
        <Card className="size-[300px] bg-zinc-100 cursor-pointer">
          <CardHeader>
            <CardTitle>{episode.title}</CardTitle>
            <CardDescription className="flex justify-between">
              <p>{episode.series}</p>
              <p>
                ep{episode.episodeNumber} s{episode.seasonNumber}
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-[7] leading-7">{episode.description}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <EpisodeDetails episode={episode}/>
      </DialogContent>
    </Dialog>
  )
}

export default EpisodeCard
