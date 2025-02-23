// "use client";
import React, { Suspense } from "react";
import { Fade } from "react-awesome-reveal";
import { findAllLeads } from "@/services/lead-service";
import { AllLeads } from "@/types/lead";
import { toast } from "react-toastify";
import LeadCard from "../Cards/LeadCard";

const TopPropertiesSection = async () => {
  const [allLeads, setAllLeads] = React.useState<AllLeads | null>(null);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  async function fetchData(
    pageNumber: number,
    createdAt: Date | null,
    search: string | null,
  ): Promise<void> {
    try {
      const data = await findAllLeads(createdAt, pageNumber, search);
      setAllLeads(data);
    } catch (error) {
      toast.error(
        `Failed to fetch Leads with error ${(error as Error).message}`,
      );
    }
  }

  React.useEffect(() => {
    setIsLoaded(true);
    if (isLoaded) {
      void fetchData(1, null, null);
    }
  }, [isLoaded]);

  return (
    <>
      {/* Populated grid */}
      <div className="grid gap-3 mobile:grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-3 pc:grid-cols-3">
        <Suspense
          fallback={<h1 className="text-2xl text-white">Loading ... </h1>}
        >
          {allLeads?.leads?.map((lead) => (
            <Fade cascade triggerOnce key={lead._id}>
              <LeadCard lead={lead} />
            </Fade>
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default TopPropertiesSection;
