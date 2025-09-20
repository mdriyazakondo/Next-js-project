"use client";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const MealSearch = () => {
  // const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const searchQuary = { search };
    const urlQuaryParam = new URLSearchParams(searchQuary);
    const url = `${pathName}?${urlQuaryParam}`;
    router.push(url);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search......."
        className="w-full border py-1.5 pl-4 outline-none rounded-md border-gray-400"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default MealSearch;
