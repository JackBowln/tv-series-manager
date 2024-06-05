"use client"
import { useQuery, useSubscription } from "@apollo/client"
import {
  LIST_EPISODES,
  ON_CREATE_EPISODE,
  ON_DELETE_EPISODE,
} from "@/lib/graphql/queries"
import { Episode } from "@/types"
import EpisodeCard from "@/components/EpisodeCard"
import { Skeleton } from "@/components/ui/skeleton"
import "@radix-ui/themes/styles.css"
import NoDataFound from "@/components/NoDataFound"
import { useState } from "react"

const EpisodeGrid: React.FC<{ search: string }> = ({ search }) => {
  const { loading, error, data, refetch } = useQuery(LIST_EPISODES, {
    variables: { search },
  })
  const { data: subscriptionData } = useSubscription(ON_CREATE_EPISODE, {
    onComplete() {
      refetch()
    }
  })
  const { data: onDeleteData } = useSubscription(ON_DELETE_EPISODE, {
    onComplete() {
      refetch()
    }
  })

  const episodes = data?.listEpisodes || []

  if (loading) {
    return Array(8).fill(<Skeleton className="size-[300px] rounded-xl" />)
  }

  if (error || !data?.listEpisodes || data.listEpisodes.length === 0) {
    return <NoDataFound />
  }

  return episodes.map((episode: Episode, index: number) => {
    return <EpisodeCard episode={episode} key={index}></EpisodeCard>
  })
}

export default EpisodeGrid
