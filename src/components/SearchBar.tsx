import React, { ChangeEventHandler, useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Container } from "@radix-ui/themes"

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
}
const SearchBar: React.FC<Props> = ({ onChange, value }: Props) => {
  return (
    <div className="border-y border-zinc-200 flex justify-center">
      <Container className="*:relative py-6 max-w-[768px]">
        <Input
          type="search"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
        {!value && (
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 stroke-zinc-400" />
        )}
      </Container>
    </div>
  )
}

export default SearchBar
