import React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

const Breadcrumbs = ({ crumbs }: any) => {
  return (
    <nav className="mt-[1rem] ml-[0.5rem]">
      <div className="flex gap-[0.75rem] text-[14px] items-center font-[600] max-md:hidden">
        {/* <div><Link href={'/'}>Courses</Link></div> */}
        {crumbs.map((crumb: any, index: any) => (
          <div key={index}>
            {index === crumbs.length - 1 ? (
              <div className="text-[#0000BF]">{crumb.label}</div>
            ) : (
              <div className="flex gap-[0.75rem] text-[#98A2B3] items-center">
                <Link href={crumb.path}>{crumb.label}</Link>
                <ChevronRight />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="hidden max-md:flex">
        {crumbs.map((crumb: any, index: any) => (
          <div key={index}>
            {index === crumbs.length - 2 ? (
              <Link href={crumb.path}>
                <div className="text-[#475467] flex text-[0.75rem] font-[600] items-center gap-[0.5rem]">
                  <ArrowLeft />
                  Back
                </div>
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
