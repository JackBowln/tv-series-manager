"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  series: z.string().min(2, {
    message: "Series name must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "Episode name must be at least 2 characters.",
  }),
  seasonNumber: z
    .number({
      required_error: "Season number is required",
      invalid_type_error: "Season number must be a number",
    })
    .int()
    .positive()
    .min(1, { message: "Season number should be at least 1" }),
  episodeNumber: z
    .number({
      required_error: "Episode number is required",
      invalid_type_error: "Episode number must be a number",
    })
    .int()
    .positive()
    .min(1, { message: "Episode number should be at least 1" }),
  description: z.string({
    message: "A description number is required",
  }),
})

const CreateEpisodeForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      series: "",
      title: "",
      seasonNumber: 1,
      episodeNumber: 1,
      description: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
        <FormField
          control={form.control}
          name="series"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TV Series name</FormLabel>
              <FormControl>
                <Input placeholder="Insert a series name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Episode name</FormLabel>
              <FormControl>
                <Input placeholder="Insert a episode name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4 *:w-full">
          <FormField
            control={form.control}
            name="seasonNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Season</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert the season"
                    {...field}
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="episodeNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Episode</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert a episode"
                    {...field}
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Insert a description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="self-end">Submit</Button>
      </form>
    </Form>
  )
}

export default CreateEpisodeForm
