import { ConfigColors } from "src/constants/ConfigColors";

const FeatureProprtyLoading = () => {
  return (
    <div className="flex w-full">
      <div
        className="mx-auto h-full w-full rounded-md border p-2 shadow"
        style={{ borderColor: ConfigColors.primary }}
      >
        <div className="h-96 w-full animate-pulse rounded bg-slate-300"></div>
      </div>
    </div>
  );
};
export default FeatureProprtyLoading;
