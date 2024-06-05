import { Button } from "@/components/ui/button"
import { Container } from "@radix-ui/themes"
import CreateEpisodeDialog from "./CreateEpisodeDialog"

const NavBar: React.FC = () => {
  return (
    <Container>
      <header className="py-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold">TV Series Manager</h2>
        <CreateEpisodeDialog />
      </header>
    </Container>
  )
}

export default NavBar
