"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { VaultSchema } from "@/schema/VaultSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreateVaultForm = () => {
  const form = useForm<z.infer<typeof VaultSchema>>({
    resolver: zodResolver(VaultSchema),
    defaultValues: {
      userId: "123",
      createdAt: new Date(),
      status: "LOCKED",
    },
  });

  function onSubmit(values: z.infer<typeof VaultSchema>) {
    // TODO: Upload media to uploadthing
    // TODO: Save the vault to the database
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl text-center font-semibold">Create a vault</h1>
          <p className="text-muted-foreground">
            Please fill all the neccessary fields to create a vault
          </p>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>
                {fieldState.error ? fieldState.error.message : "Name"}
              </FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>
                {fieldState.error ? fieldState.error.message : "Message"}
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unlockDate"
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col">
              <FormLabel>
                {fieldState.error ? fieldState.error.message : "Unlock Date"}
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mediaURL"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>
                {fieldState.error ? fieldState.error.message : "Media URL"}
              </FormLabel>
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CreateVaultForm;
