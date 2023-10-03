"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import cover from "@/app/assets/images/videocover.png";
import { useState } from "react";
import ReactPlayer from "react-player";

const VideoCard = () => {
  const [box, setBox] = useState(false);

  return (
    <div className="">
      <Dialog>
        <DialogTrigger className="" asChild>
          <Card className=" relative rounded-[0.375rem] w-[16.75rem] mx-auto border-none shadow-none bg-none">
            <CardContent className="p-0 ">
              <Image onClick={() => setBox(true)} src={cover} alt="cover" />
            </CardContent>
            <CardFooter className="p-0 mt-[0.5rem] text-[0.875rem] font-[600] text-[#03080E]">
              Video Headline Here lorem ipsum dolor un met dolor un met lasget
            </CardFooter>
            <span className="absolute flex gap-[0.25rem] bg-green-100 py-[0.1875rem] pl-[0.25rem] pr-[0.5rem] rounded-br-[0.375rem] rounded-tl-[0.375rem]  top-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1736_50038)">
                  <path
                    d="M10.1719 18C14.5008 18 18.0101 14.4907 18.0101 10.1619C18.0101 5.83298 14.5008 2.32373 10.1719 2.32373C5.84305 2.32373 2.3338 5.83298 2.3338 10.1619C2.3338 14.4907 5.84305 18 10.1719 18Z"
                    fill="#9DEAD7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.7743 0.504541C14.7697 0.217815 14.5335 -0.0108873 14.2468 -0.00627923C13.9601 -0.00167115 13.7314 0.234502 13.736 0.521228L13.7624 2.16516C12.2054 1.02355 10.2299 0.41572 8.10983 0.615473C4.11895 0.995068 0.933429 4.31396 0.707724 8.32023C0.453602 12.7599 3.75209 16.5074 8.01739 16.9723C8.03253 16.9753 8.04795 16.9776 8.06364 16.9791C8.34577 17.0099 8.63303 17.0253 8.92029 17.0253V17.0201C9.49481 17.0201 10.0693 16.9586 10.6285 16.8406C10.885 16.7842 11.0491 16.5328 10.9927 16.2763C10.9363 16.0199 10.6849 15.8557 10.4284 15.9121C9.80169 16.0471 9.14913 16.0934 8.50518 16.0573C8.48823 16.0543 8.47099 16.052 8.45352 16.0506H8.44839C4.53958 15.8044 1.45665 12.4547 1.65158 8.43821C1.82599 4.84745 5.09872 1.64141 8.68949 1.53368C10.3449 1.48538 11.8838 1.99336 13.1324 2.88389L11.2413 2.91249C10.9546 2.91683 10.7257 3.15279 10.73 3.43952C10.7343 3.72625 10.9703 3.95517 11.257 3.95084L14.3092 3.90467C14.447 3.90258 14.5783 3.84582 14.6742 3.74688C14.7701 3.64793 14.8227 3.51493 14.8205 3.37715L14.7743 0.504541ZM12.7881 15.984C12.6239 15.984 12.4649 15.8968 12.3777 15.748C12.2443 15.5223 12.3213 15.2299 12.5521 15.0965C13.219 14.7118 13.8089 14.2296 14.3167 13.6653C14.4911 13.4704 14.7938 13.455 14.9887 13.6294C15.1836 13.8038 15.199 14.1065 15.0246 14.3014C14.4501 14.9426 13.7781 15.4864 13.0292 15.9173C12.9522 15.9583 12.8701 15.9788 12.7932 15.9788L12.7881 15.984ZM15.9838 12.4291C15.9172 12.4291 15.8556 12.4137 15.7889 12.3881C15.5478 12.2803 15.4401 11.9982 15.5478 11.7622C15.8556 11.0646 16.0557 10.3259 16.1377 9.56674C16.1634 9.30513 16.3942 9.11533 16.661 9.14098C16.9226 9.16663 17.1124 9.40259 17.0867 9.66421C16.9944 10.5209 16.7738 11.357 16.4199 12.147C16.3429 12.3265 16.1685 12.4291 15.9838 12.4291ZM16.4866 7.66877C16.266 7.66877 16.071 7.51488 16.0197 7.2943C15.8607 6.5505 15.5889 5.83747 15.2041 5.17062C15.0708 4.94491 15.1426 4.64226 15.3734 4.50889C15.5991 4.37552 15.8864 4.44221 16.0197 4.66791C16.0197 4.66791 16.0351 4.69356 16.0351 4.69869C16.466 5.44249 16.7738 6.24785 16.9534 7.08911C17.0098 7.3456 16.8456 7.59695 16.5891 7.65338L16.5757 7.65532L16.5757 7.65532C16.5454 7.65973 16.5185 7.66364 16.4917 7.66364L16.4866 7.66877Z"
                    fill="#142F54"
                  />
                  <path
                    d="M7.94567 13.0808V6.9047C7.73022 6.95086 7.51991 6.99703 7.31472 7.03294C7.10953 7.06885 6.89922 7.10475 6.69403 7.14066L6.52475 5.9198C6.70429 5.87876 6.90947 5.81208 7.14544 5.72487C7.3814 5.63767 7.61737 5.53508 7.86359 5.42735C8.10469 5.3145 8.33039 5.20165 8.54071 5.08366C8.75103 4.96568 8.91004 4.86309 9.02803 4.76562L10.0283 4.899L10.0181 13.0859H7.9508L7.94567 13.0808Z"
                    fill="#142F54"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1736_50038">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-[0.75rem] text-gray-700 font-[600]">
                1-min Tutorials
              </p>
            </span>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-[33.125rem] pb-0 pt-10 bg-none border-none shadow-none px-0">
          <ReactPlayer
            url={
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            }
            width={"33.125rem"}
            height={"18.75rem"}
            controls={true}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoCard;
