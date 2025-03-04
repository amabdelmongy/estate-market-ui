"use client";
import { useState } from "react";
import { Stepper, Group, Container } from "@mantine/core";
import ImagesStep from "../../components/AddProperty/ImagesStep";
import DetailsStep from "../../components/AddProperty/DetailsStep";
import OverviewStep from "../../components/AddProperty/OverviewStep";
import DescriptionStep from "../../components/AddProperty/DescriptionStep";
import AddressStep from "../../components/AddProperty/AddressStep";
import FeatuersStep from "../../components/AddProperty/FeaturesStep";
import AssetsStep from "../../components/AddProperty/AssetsStep";
// import ConsultantStep from "../../components/AddProperty/ConsultantStep";
// import SocialLinksStep from "../../components/AddProperty/SocialLinksStep";
import PrimaryButton from "src/components/Buttons/PrimaryButton";

// add new property page
// route: /addproperty

const AddPropertyPage = () => {
  // Active step state
  const [active, setActive] = useState(0);

  // Next and previev buttons function
  const nextStep = () =>
    setActive((current) => (current < 10 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <section className="mb-2 mt-40">
      <Container>
        {/* Stepper component */}
        <Stepper
          color="teal"
          active={active}
          orientation="vertical"
          onStepClick={setActive}
        >
          {/* Images and Details step*/}
          <Stepper.Step
            label="Images and details"
            description="Top carousel and details section"
            classNames={{
              stepLabel: "dark:text-white/90",
            }}
          >
            <div className="rounded-default bg-white p-2 dark:bg-slate-900 dark:text-white/90">
              <div className="text-lg font-bold">Image carousel</div>
              <ImagesStep />
              <div className="mt-2 text-lg font-bold">Details</div>
              <DetailsStep />
            </div>
          </Stepper.Step>

          {/* Description / Overview step */}
          <Stepper.Step
            label="Description/Overview step"
            description="Description and Overview details"
            classNames={{
              stepLabel: "dark:text-white/90",
            }}
          >
            <div className="rounded-default bg-white p-2 dark:bg-slate-900 dark:text-white/90">
              <div className="text-lg font-bold">Overview section</div>
              <OverviewStep />
              <div className="mt-2 text-lg font-bold">Description section</div>
              <DescriptionStep />
            </div>
          </Stepper.Step>

          {/* Address and features step*/}
          <Stepper.Step
            label="Address/Features step"
            description="Address and features section"
            classNames={{
              stepLabel: "dark:text-white/90",
            }}
          >
            <div className="rounded-default bg-white p-2 dark:bg-slate-900 dark:text-white/90">
              <div className="text-lg font-bold">Address section</div>
              <AddressStep />
              <div className="mt-2 text-lg font-bold">Features section</div>
              <FeatuersStep />
            </div>
          </Stepper.Step>

          {/* Assets Step */}
          <Stepper.Step
            label="Assets step"
            description="Assets embedded links"
            classNames={{
              stepLabel: "dark:text-white/90",
            }}
          >
            <div className="rounded-default bg-white p-2 dark:bg-slate-900 dark:text-white/90">
              <div className="text-lg font-bold">Asset section</div>
              <AssetsStep />
            </div>
          </Stepper.Step>

          {/* Consultant and Social Step */}
          <Stepper.Step
            label="Consultant"
            description="Consultant details "
            classNames={{
              stepLabel: "dark:text-white/90",
            }}
          >
            <div className="rounded-default bg-white p-2 dark:bg-slate-900 dark:text-white/90">
              <div className="text-lg font-bold">Consultant section</div>
              {/* <ConsultantStep />
              <div className="mt-2 text-lg font-bold">Social links section</div>
              <SocialLinksStep /> */}
            </div>
          </Stepper.Step>
        </Stepper>

        {/* Next and previous buttons */}
        <Group mt="xl">
          <PrimaryButton text="Prev" onClick={prevStep} />
          <PrimaryButton text="Next" onClick={nextStep} />
        </Group>
      </Container>
    </section>
  );
};
export default AddPropertyPage;
