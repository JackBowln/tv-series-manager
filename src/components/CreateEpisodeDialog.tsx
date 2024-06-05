import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import CreateEpisodeForm from "@/components/CreateEpisodeForm"
import { Button } from "@/components/ui/button"

const CreateEpisodeDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild={true}>
        <Button>Create Episode</Button>
      </DialogTrigger>
      <DialogContent>
        <h2 className="text-3xl font-bold">Insert your episode data</h2>
        <CreateEpisodeForm />
      </DialogContent>
    </Dialog>
  )
}

export default CreateEpisodeDialog
