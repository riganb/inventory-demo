"use client";

import Image, { StaticImageData } from "next/image";
import gkldhm_invntry_img from "../../../public/images/gokuldham-inventory.jpg";
import hldrm_invntry_img from "../../../public/images/haldiram-inventory.jpg";
import { useEffect, useState } from "react";
import clsx from "clsx";

type Inventory = {
  id: string;
  name: string;
  image: StaticImageData;
};

const Inventories: Inventory[] = [
  { id: "0xaab", name: "Gokuldham", image: gkldhm_invntry_img },
  { id: "0x2mf", name: "Haldiram", image: hldrm_invntry_img },
];

const INVENTORY_KEY = "inventory";

export default function Home() {
  const [selectedInventoryId, setSelectedInventoryId] = useState<
    string | null
  >();

  useEffect(() => {
    const existingId = localStorage.getItem(INVENTORY_KEY);
    if (existingId) {
      setSelectedInventoryId(existingId);
    }
  }, []);

  useEffect(() => {
    if (selectedInventoryId) {
      localStorage.setItem(INVENTORY_KEY, selectedInventoryId);
    }
  }, [selectedInventoryId]);

  const updateSelectedInventoryId = (inventoryId: string) => () => {
    setSelectedInventoryId(inventoryId);
  };

  return (
    <div className="flex h-full items-center justify-center w-full flex-row gap-5 flex-wrap">
      {Inventories.map((inventory) => (
        <div
          onClick={updateSelectedInventoryId(inventory.id)}
          key={inventory.id}
          className={clsx(
            "flex p-4 rounded-lg gap-5 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:shadow-emerald-800 text-2xl items-end",
            inventory.id === selectedInventoryId
              ? "bg-emerald-700 text-white shadow-md shadow-emerald-800 font-bold"
              : "bg-white text-emerald-700"
          )}
        >
          <Image
            src={inventory.image}
            alt={`${inventory.name} Inventory`}
            width={200}
            height={150}
            className="rounded-lg"
          />
          {inventory.name}
        </div>
      ))}
    </div>
  );
}
