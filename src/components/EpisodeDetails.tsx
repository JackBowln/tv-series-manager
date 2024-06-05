"use client"
import { Box, Flex, Section } from "@radix-ui/themes"
import React, { useEffect } from "react"
import Image from "next/image"
import useGetEpisode from "@/service/OMDB-service"
import { Episode } from "@/types"
import { CircleOffIcon, Loader2, LoaderCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DELETE_EPISODE, LIST_EPISODES } from "@/lib/graphql/queries"
import { useMutation } from "@apollo/client"
import { Skeleton } from "@/components/ui/skeleton"

type Props = { episode: Episode }

const EpisodeDetails: React.FC<Props> = ({ episode }: Props) => {
  const { data, loading } = useGetEpisode(episode.imdbId)
  const [deleteEpisode, { loading: loadingOnDelete }] =
    useMutation(DELETE_EPISODE)

  if (loading) {
    return (
      <Flex className="w-[50vw] h-80" justify="center" align="center">
        <LoaderCircleIcon className="size-24 animate-spin transition " />
      </Flex>
    )
  }

  return (
    <Flex direction="column" className="max-w-[70vw] min-w-[800px]">
      <Box className="mb-5">
        <h2 className="text-zinc-700 text-3xl">{episode.title}</h2>
        <Flex className="text-zinc-500 gap-6">
          <h4>{episode.series}</h4>
          <h4>
            ep{episode.episodeNumber} s{episode.seasonNumber}
          </h4>
        </Flex>
      </Box>
      <Flex>
        <Box>
          {data?.Poster ? (
            <Image
              src={data.Poster}
              alt={data.Title + " poster"}
              width={535}
              height={535}
              className="min-w-[535px] rounded-2xl"
            ></Image>
          ) : (
            <Skeleton className="size-[535px] rounded-2xl" />
          )}
        </Box>
        <Flex direction="column" width="100%">
          <p className="px-8 w-full h-full">{episode.description}</p>
          <Button
            variant="destructive"
            className="uppercase self-end"
            onClick={() =>
              deleteEpisode({
                variables: {
                  episodeId: episode.id,
                },
              })
            }
          >
            {loadingOnDelete && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Delete episode
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default EpisodeDetails
