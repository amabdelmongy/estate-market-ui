import { ConfigColors } from "src/constants/ConfigColors";

const TopPropertiesLoading = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array(8)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className="mx-auto h-full w-full max-w-sm rounded-md border p-2 shadow"
            style={{ borderColor: ConfigColors.primary }}
          >
            <div className="flex animate-pulse flex-col">
              <div className="h-32 w-full rounded bg-slate-300"></div>

              <div className="my-2 flex justify-start space-x-2">
                <div className="aspect-video h-10 w-10 animate-pulse rounded bg-slate-300"></div>
                <div className="aspect-video h-10 w-10 animate-pulse rounded bg-slate-300"></div>
                <div className="aspect-video h-10 w-10 animate-pulse rounded bg-slate-300"></div>
                <div className="aspect-video h-10 w-10 animate-pulse rounded bg-slate-300"></div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="h-5 w-full animate-pulse rounded bg-slate-300"></div>
              <div className="h-5 w-full animate-pulse rounded bg-slate-300"></div>
              <div className="h-5 w-full animate-pulse rounded bg-slate-300"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default TopPropertiesLoading;
