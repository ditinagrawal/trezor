"use client";

import SingleVault from "./SingleVault";

const vaults = [
  {
    id: 1,
    name: "Anonymous Surprise Party",
    description: "A surprise gathering for a special someone.",
    status: "LOCKED",
    unlockDate: "2023-10-01",
  },
  {
    id: 2,
    name: "Birthday Celebration",
    description: "A special day to celebrate life and joy with loved ones.",
    status: "UNLOCKED",
    unlockDate: "2023-09-15",
  },
  {
    id: 3,
    name: "New Year's Eve Party",
    description: "Welcoming the new year with joy and festivities.",
    status: "LOCKED",
    unlockDate: "2023-12-31",
  },
  {
    id: 4,
    name: "Graduation Ceremony",
    description: "Honoring academic achievements with friends.",
    status: "UNLOCKED",
    unlockDate: "2023-05-20",
  },
  {
    id: 5,
    name: "Mystery Gift Exchange",
    description: "An anonymous gift exchange among friends.",
    status: "LOCKED",
    unlockDate: "2023-11-25",
  },
];

const Vaults = () => {
  return (
    <main className="p-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-xl">My Vaults</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vaults.map((vault) => (
            <SingleVault
              key={vault.id}
              name={vault.name}
              description={vault.description}
              status={vault.status}
              unlockDate={vault.unlockDate}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Vaults;
