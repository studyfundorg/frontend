import { FC, Fragment, ReactNode } from "react";
import Link from "next/link";

export type PageSearchParams = {
  searchParams: { tab: string };
  defaultTab: string;
  path: string;
  tabDatas: { id: string; title: string; count?: number; comp: ReactNode }[];
};

const PageTabs: FC<PageSearchParams> = ({
  tabDatas,
  searchParams,
  defaultTab,
  path,
}) => {
  const activeTab = searchParams.tab || defaultTab;

  return (
    <>
      <ul className="border-Line container my-5 flex justify-normal overflow-x-auto border-b-[1px] whitespace-nowrap">
        {tabDatas?.map(({ id, title, count }) => (
          <Link
            key={id}
            href={`${path}?tab=${id}`}
            className={` ${activeTab === id ? "border-primary text-primary border-b-[2px] font-medium" : ""} flex items-center gap-2 px-6 pb-2 !font-bold text-[#95999F]`}
          >
            {title}
            {count && (
              <div
                className={`grid size-8 place-items-center p-1 ${activeTab === id ? "text-primary bg-[#F4F9FE]" : ""} text-Grey8 text- rounded-full bg-[#ECECEC] text-xs`}
              >
                {count}
              </div>
            )}
          </Link>
        ))}
      </ul>

      <aside className="container">
        {tabDatas?.map(({ id, comp }) => (
          <Fragment key={id}>{activeTab === id && comp}</Fragment>
        ))}
      </aside>
    </>
  );
};

export default PageTabs;
