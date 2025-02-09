// in home page there are four sections
// this is the selected single property section

import { SinglePropertyData } from "src/Data/singlePropertyData";
import FeaturePropertyCard from "../Cards/FeaturePropertyCard";

const FeaturePropertySection = async () => {
  return (
    <FeaturePropertyCard
      images={SinglePropertyData.images}
      features={{
        bedrooms: SinglePropertyData.overview.bedrooms,
        bathrooms: SinglePropertyData.overview.bathrooms,
      }}
      link={"/property/123"}
      price={SinglePropertyData.price}
      tags={SinglePropertyData.tags}
      title={SinglePropertyData.title}
    />
  );
};

export default FeaturePropertySection;
