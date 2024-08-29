"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Label } from "../ui/label";

const CreateVaultForm = () => {
  const { data: user } = useSession();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [unlockDate, setUnlockDate] = useState("");
  const [media, setMedia] = useState<File | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO: Upload media to uploadthing
    // TODO: Save the vault to the database
    const formdata = {
      name,
      message,
      unlockDate,
      mediaURL: media?.name,
      userId: user?.user?.email,
      createdAt: new Date(),
      status: "LOCKED",
    };
    console.log(
      "🚀 ~ file: CreateVaultForm.tsx:32 ~ onSubmit ~ formdata:",
      formdata
    );
    const res = await fetch("/api/save-vault", {
      method: "POST",
      body: JSON.stringify(formdata),
    });
    const data = await res.json();
    console.log("🚀 ~ file: CreateVaultForm.tsx:53 ~ onSubmit ~ data:", data);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl text-center font-semibold">Create a vault</h1>
        <p className="text-muted-foreground">
          Please fill all the neccessary fields to create a vault
        </p>
      </div>
      <div>
        <Label className="space-y-1">
          <span>Name</span>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            placeholder="Name"
            required
          />
        </Label>
      </div>
      <div>
        <Label className="space-y-1">
          <span>Message</span>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            minLength={10}
            maxLength={50}
            placeholder="Message"
            required
          />
        </Label>
      </div>
      <div>
        <Label className="space-y-1">
          <span>Unlock Date</span>
          <Input
            value={unlockDate}
            onChange={(e) => setUnlockDate(e.target.value)}
            type="date"
            placeholder="unlock Date"
            required
          />
        </Label>
      </div>
      <Input
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setMedia(e.target.files[0]);
          }
        }}
        type="file"
        multiple={false}
        required
        className="cursor-pointer"
      />
      <Button className="w-full" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreateVaultForm;
