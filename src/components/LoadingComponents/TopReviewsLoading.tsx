import { ConfigColors } from "src/constants/ConfigColors";

const TopReviewsLoading = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array(4)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className="mx-auto h-full w-full rounded-md border p-2 shadow"
            style={{ borderColor: ConfigColors.primary }}
          >
            <div className="flex space-x-2">
              <div className="h-20 w-20 animate-pulse rounded bg-slate-300"></div>
              <div className="flex flex-col space-y-2">
                <div className="h-5 w-32 animate-pulse rounded bg-slate-300"></div>
                <div className="h-5 w-32 animate-pulse rounded bg-slate-300"></div>
                <div className="h-5 w-32 animate-pulse rounded bg-slate-300"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default TopReviewsLoading;
