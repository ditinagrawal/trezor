"use client";
import { GiOpenTreasureChest } from "react-icons/gi";
import { GiChest } from "react-icons/gi";
import { Badge } from "@/components/ui/badge";

const SingleVault = ({
  name,
  description,
  status,
  unlockDate,
}: {
  name: string;
  description: string;
  status: string;
  unlockDate: string;
}) => {
  return (
    <main className="px-4 py-6 shadow rounded-lg">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div>
          {status === "LOCKED" && <GiChest size={96} color="gold" />}
          {status === "UNLOCKED" && (
            <GiOpenTreasureChest size={96} color="silver" />
          )}
        </div>
        <div className="text-center">
          <h1 className="text-xl">{name}</h1>
          <p>{description}</p>
        </div>
        <div>
          {status === "LOCKED" && (
            <Badge variant="outline" className="text-sm">
              {`${status} until ${unlockDate}`}
            </Badge>
          )}
          {status === "UNLOCKED" && (
            <Badge variant="outline" className="text-sm">
              {`${status} on ${unlockDate}`}
            </Badge>
          )}
        </div>
      </div>
    </main>
  );
};

export default SingleVault;
