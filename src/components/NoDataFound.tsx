import { Container, Flex } from "@radix-ui/themes"
import React from "react"
import Image from "next/image"

type Props = {
  message?: string
}
const NoDataFound: React.FC<Props> = ({ message }: Props) => {
  return (
    <Container mt="6" >
      <Flex align="center" direction="column" gapY="8">
        <Image
          priority
          src="/images/EmptyList.svg"
          height={500}
          width={500}
          alt="No data found"
        />
        <h2  className="text-3xl font-bold">{message || "No data found"}</h2>
      </Flex>
    </Container>
  )
}

export default NoDataFound
