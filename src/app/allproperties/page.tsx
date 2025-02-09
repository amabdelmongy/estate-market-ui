"use client";
import Head from "next/head";
import AllPropertiesHeader from "../../components/AllPropertiesView/AllPropertiesHeader";
import { Container } from "@mantine/core";
import PropertyCard from "../../components/Cards/PropertyCard";
import { PropertiesData } from "src/Data/propertiesData";
import { Fade } from "react-awesome-reveal";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";
import { ConfigColors } from "src/constants/ConfigColors";
import { Suspense } from "react";
import TopPropertiesLoading from "src/components/LoadingComponents/TopAgentsLoading";

// view all properties page same for categories page
// route: /allproperties

const AllPropertiesPage = () => {
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
          <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-3 pc:grid-cols-4">
            <Suspense fallback={<TopPropertiesLoading />}>
              {PropertiesData.flatMap((e) => [e, e]).map((property, index) => (
                <Fade cascade triggerOnce key={index}>
                  {/* Replace index with unique id of property to the Link component below */}
                  <PropertyCard
                    id={property.id}
                    title={property.title}
                    features={{
                      bathrooms: property.bathrooms,
                      bedrooms: property.bedrooms,
                    }}
                    images={property.images}
                    link={"/property/" + property.slug}
                    price={property.price}
                    propertyLocation={property.location}
                    propertyType={property.type}
                    tags={property.tags}
                  />
                </Fade>
              ))}
            </Suspense>
          </div>
        </section>
      </Container>
    </>
  );
};

export default AllPropertiesPage;
