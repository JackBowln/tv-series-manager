"use client"
import { ApolloProvider, useQuery } from "@apollo/client"
import client from "@/lib/graphql/apollo-client"
import EpisodeGrid from "@/components/EpisodeGrid"
import SearchBar from "@/components/SearchBar"
import NavBar from "@/components/NavBar"
import { Container, Flex } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"
import { useState } from "react"
import { Toaster } from "@/components/ui/toaster"

const Page: React.FC = () => {
  const [search, setSearch] = useState("")

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target
    setSearch(value)
  }
  return (
    <ApolloProvider client={client}>
      <Theme>
        <NavBar></NavBar>
        <SearchBar value={search} onChange={handleChange} />
        <Container className="mt-12">
          <Flex gap="4" wrap="wrap">
            <EpisodeGrid search={search} />
          </Flex>
        </Container>
      </Theme>
      <Toaster />
    </ApolloProvider>
  )
}

export default Page
