// "use client";
import React, { Suspense } from "react";
import PropertyCard from "../Cards/PropertyCard";
import { Fade } from "react-awesome-reveal";
import { PropertiesData } from "../../Data/propertiesData";

const TopPropertiesSection = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 seconds delayage
  return (
    <>
      {/* Populated grid */}
      <div className="grid gap-4 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 pc:grid-cols-4">
        <Suspense
          fallback={<h1 className="text-2xl text-white">Loading ... </h1>}
        >
          {PropertiesData.slice(0, 8).map((property, index) => (
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
    </>
  );
};

export default TopPropertiesSection;
