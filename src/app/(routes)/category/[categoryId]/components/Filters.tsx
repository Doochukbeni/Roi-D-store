"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

const Filters = ({ valueKey, name, data }: FilterProps) => {
  const SearchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = SearchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(SearchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name} </h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-slate-100 border border-gray-300",
                selectedValue === filter.id && "bg-slate-900 text-slate-100"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
