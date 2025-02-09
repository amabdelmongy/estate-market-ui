import React from "react";
import { Fade } from "react-awesome-reveal";
import { CategoriesData } from "src/Data/categoriesData";
import CategoriesCard from "../Cards/CategoriesCard";
import { ConfigColors } from "src/constants/ConfigColors";

// in home page there are four sections
// this is the category section

const CategoriesSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-4 pc:grid-cols-4">
        {/* Title card*/}
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded bg-white py-4 dark:bg-slate-900">
          <div
            className={` text-2xl font-bold`}
            style={{ color: ConfigColors.primary }}
          >
            Categories
          </div>
          <div className="font-bold dark:text-white">Browse by category</div>
        </div>
        <Fade cascade direction="right" triggerOnce>
          {/*Individual Category */}
          {CategoriesData.map((category) => (
            <div key={category.id}>
              <CategoriesCard
                title={category.title}
                count={category.listings}
                src={category.img}
              />
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default CategoriesSection;
