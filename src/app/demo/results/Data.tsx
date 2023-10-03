import { Button } from "@/components/Button";
export default function Data() {
  return (
    <>
      <div className="flex justify-between gap-[0.5rem] py-[0.5rem] pr-[1rem] border-y-[0.0625rem] w-[22rem] max-md:w-[100%] border-r-[0.0625rem] border-gray-200 ml-[0.0rem]">
        <div className="flex gap-[0.5rem] pt-[0.25rem]">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 6.5L9 17.5L4 12.5"
              stroke="#3BD6B0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.5 9.46533C9.5 8.98805 9.5 8.74941 9.59974 8.61618C9.68666 8.50007 9.81971 8.42744 9.96438 8.4171C10.1304 8.40525 10.3311 8.53429 10.7326 8.79239L15.4532 11.8271C15.8016 12.051 15.9758 12.163 16.0359 12.3054C16.0885 12.4298 16.0885 12.5702 16.0359 12.6946C15.9758 12.837 15.8016 12.949 15.4532 13.1729L10.7326 16.2076C10.3311 16.4657 10.1304 16.5948 9.96438 16.5829C9.81971 16.5726 9.68666 16.4999 9.59974 16.3838C9.5 16.2506 9.5 16.012 9.5 15.5347V9.46533Z"
              stroke="#03080E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V16.7C21 18.3802 21 19.2202 20.673 19.862C20.3854 20.4265 19.9265 20.8854 19.362 21.173C18.7202 21.5 17.8802 21.5 16.2 21.5H7.8C6.11984 21.5 5.27976 21.5 4.63803 21.173C4.07354 20.8854 3.6146 20.4265 3.32698 19.862C3 19.2202 3 18.3802 3 16.7V8.3Z"
              stroke="#03080E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[1rem] font-[600] text-[#03080E] pt-[0.25rem]">
            Practice Problem
          </p>
        </div>
        <Button
          className="flex gap-[0.5rem] text-[0.875rem] text-[#0000BF] font-[600]"
          variant={"video"}>
          play
          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2461_7008)">
              <path
                d="M0.299988 2.85838C0.299988 2.28564 0.299988 1.99927 0.419678 1.8394C0.523983 1.70007 0.683644 1.61291 0.857242 1.60051C1.05645 1.58628 1.29734 1.74114 1.77911 2.05085L7.44383 5.69245C7.86189 5.96121 8.07092 6.09559 8.14312 6.26645C8.2062 6.41575 8.2062 6.58422 8.14312 6.73352C8.07092 6.90438 7.86189 7.03876 7.44383 7.30752L1.77912 10.9491C1.29734 11.2588 1.05645 11.4137 0.857242 11.3995C0.683644 11.3871 0.523983 11.2999 0.419678 11.1606C0.299988 11.0007 0.299988 10.7143 0.299988 10.1416V2.85838Z"
                fill="#0000BF"
              />
            </g>
            <defs>
              <clipPath id="clip0_2461_7008">
                <rect
                  width="8.4"
                  height="12"
                  fill="white"
                  transform="translate(0.299988 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>
    </>
  );
}
