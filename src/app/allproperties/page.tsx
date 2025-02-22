"use client";
import Head from "next/head";
import AllPropertiesHeader from "../../components/AllPropertiesView/AllPropertiesHeader";
import { Container, Pagination } from "@mantine/core";
import { Fade } from "react-awesome-reveal";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";
import { ConfigColors } from "src/constants/ConfigColors";
import React, { Suspense } from "react";
import TopPropertiesLoading from "src/components/LoadingComponents/TopAgentsLoading";
import { findAllLeads } from "@/services/lead-service";
import { toast } from "react-toastify";
import { type AllLeads } from "@/types/lead";
import LeadCard from "src/components/Cards/LeadCard";

// view all properties page same for categories page
// route: /allproperties

const AllPropertiesPage = () => {
  const [allLeads, setAllLeads] = React.useState<AllLeads | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
      void fetchData(currentPage, null, null);
    }
  }, [isLoaded, currentPage]);

  return (
    <>
      <Head>
        <title>{ConfigBasicInfo.name} - All Properties</title>
      </Head>
      <div className="pc:w-full">
        <AllPropertiesHeader />
      </div>
      {/* Properties section */}
      <Container size="xl">
        {/* All properties title */}
        <div className="my-10 flex items-center justify-between pt-10">
          <h1
            className="text-primary text-xl font-bold tablet:text-4xl pc:text-2xl"
            style={{ color: ConfigColors.primary }}
          >
            All properties
          </h1>
        </div>
        <section className="mt-10">
          {/* populated grid */}
          <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2 laptop:grid-cols-3 pc:grid-cols-3">
            <Suspense fallback={<TopPropertiesLoading />}>
              {allLeads?.leads
                ?.filter((lead) => lead)
                .map((lead) => (
                  <Fade cascade triggerOnce key={lead._id}>
                    <LeadCard lead={lead} />
                  </Fade>
                ))}
            </Suspense>
          </div>
        </section>
        <section className="mt-12">
          <Pagination
            total={allLeads ? allLeads.pages : 1}
            value={currentPage}
            onChange={handlePageChange}
          />
        </section>
      </Container>
    </>
  );
};

export default AllPropertiesPage;
