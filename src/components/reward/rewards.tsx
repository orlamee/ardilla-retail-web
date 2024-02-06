"use client";

import Link from "next/link";
import movies from "../../assets/movies.svg";
import Image from "next/image";
import PanelHeader from "../panelheader";

export default function RewardandRefer() {
  return (
    <div>
      <PanelHeader title="Rewards" subtitle="View your rewards on Ardila" />
      <div className="flex flex-row justify-between">
        <div>
          <h3 className="text-[#000000] font-[500] leading-[20px] text-[14px]">
            Refer reward
          </h3>
          <p className="text-[#9CA3AF] font-[500] mt-2 leading-[20px] text-[12px] ">
            Your friend annie created an account. Well done!
          </p>
        </div>
        <div>
          <button className="px-6 py-4 bg-[#240552] text-white font-[500] text-[12px] leading-[11px] rounded-[4px] border-2 border-[#240552]">
            <div className="flex flex-row">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.32971 6.27939C4.55553 6.4942 4.55553 6.8467 4.32971 7.0615C4.11491 7.2763 3.76241 7.2763 3.5476 7.0615C3.03173 6.54485 2.74198 5.8446 2.74198 5.11449C2.74198 4.38439 3.03173 3.68414 3.5476 3.16749L5.49736 1.21773C6.01401 0.701858 6.71427 0.412109 7.44437 0.412109C8.17447 0.412109 8.87473 0.701858 9.39137 1.21773C9.90725 1.73438 10.197 2.43463 10.197 3.16474C10.197 3.89484 9.90725 4.59509 9.39137 5.11174L8.57071 5.9324C8.57622 5.48076 8.50462 5.02912 8.3504 4.59952L8.60927 4.33514C8.76367 4.1824 8.88625 4.00056 8.96991 3.80013C9.05356 3.5997 9.09664 3.38468 9.09664 3.16749C9.09664 2.9503 9.05356 2.73527 8.96991 2.53485C8.88625 2.33442 8.76367 2.15257 8.60927 1.99984C8.45653 1.84543 8.27468 1.72285 8.07426 1.6392C7.87383 1.55554 7.6588 1.51246 7.44162 1.51246C7.22443 1.51246 7.0094 1.55554 6.80897 1.6392C6.60855 1.72285 6.4267 1.84543 6.27396 1.99984L4.32971 3.94409C4.17531 4.09683 4.05273 4.27867 3.96907 4.4791C3.88541 4.67953 3.84234 4.89456 3.84234 5.11174C3.84234 5.32893 3.88541 5.54396 3.96907 5.74438C4.05273 5.94481 4.17531 6.12666 4.32971 6.27939ZM5.88291 3.94409C6.09771 3.72928 6.45021 3.72928 6.66502 3.94409C7.18089 4.46074 7.47064 5.16099 7.47064 5.89109C7.47064 6.62119 7.18089 7.32145 6.66502 7.8381L4.71526 9.78786C4.19861 10.3037 3.49835 10.5935 2.76825 10.5935C2.03815 10.5935 1.33789 10.3037 0.821245 9.78786C0.305374 9.27121 0.015625 8.57095 0.015625 7.84085C0.015625 7.11075 0.305374 6.41049 0.821245 5.89385L1.64191 5.07319C1.6364 5.52483 1.708 5.97646 1.86222 6.41158L1.60335 6.67045C1.44895 6.82319 1.32637 7.00503 1.24271 7.20546C1.15906 7.40588 1.11598 7.62091 1.11598 7.8381C1.11598 8.05528 1.15906 8.27031 1.24271 8.47074C1.32637 8.67117 1.44895 8.85301 1.60335 9.00575C1.75609 9.16016 1.93794 9.28273 2.13836 9.36639C2.33879 9.45005 2.55382 9.49312 2.77101 9.49312C2.98819 9.49312 3.20322 9.45005 3.40365 9.36639C3.60407 9.28273 3.78592 9.16016 3.93866 9.00575L5.88291 7.0615C6.03731 6.90876 6.15989 6.72692 6.24355 6.52649C6.32721 6.32606 6.37028 6.11103 6.37028 5.89385C6.37028 5.67666 6.32721 5.46163 6.24355 5.26121C6.15989 5.06078 6.03731 4.87893 5.88291 4.7262C5.82942 4.67607 5.78678 4.6155 5.75763 4.54824C5.72848 4.48098 5.71344 4.40845 5.71344 4.33514C5.71344 4.26183 5.72848 4.18931 5.75763 4.12204C5.78678 4.05478 5.82942 3.99421 5.88291 3.94409Z"
                  fill="white"
                />
              </svg>
              <p className="ms-2">Claim</p>
            </div>
          </button>
        </div>
      </div>
      <div className="mt-8 pe-3">
        <Link href="/dashboard/rewards/movies">
          <div className="bg-[#fff] border border-[#000000] p-6 rounded-[5px] mb-9 shadow-[10px_10px_#240552]">
            <div className="flex flex-row justify-between">
              <div className="mt-2">
                <h3 className="text-[#000000] font-[500] leading-[20px] text-[14px]">
                  Movies
                </h3>
                <p className="text-[#9CA3AF] font-[500] mt-2 leading-[20px] text-[11px] ">
                  Free tickets to watch any movie up for grabs
                </p>
              </div>
              <div>
                <Image src={movies} alt="movies" className="" />
              </div>
            </div>
          </div>
        </Link>
        <Link href="/dashboard/rewards/events">
          <div className="bg-[#fff] border border-[#000000] p-6 rounded-[5px] shadow-[10px_10px_#240552]">
            <div className="flex flex-row justify-between">
              <div className="mt-2">
                <h3 className="text-[#000000] font-[500] leading-[20px] text-[14px]">
                  Events
                </h3>
                <p className="text-[#9CA3AF] font-[500] mt-2 leading-[20px] text-[11px] ">
                  Get 10 free ticket to any event of our choice
                </p>
              </div>
              <div>
                <Image src={movies} alt="movies" className="" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
