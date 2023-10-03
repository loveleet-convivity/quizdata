import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
export default function Attemptcard() {
  return (
    <>
      <Card className="py-[1.25rem] px-[1rem] gap-[1.25rem] border-[0.0625rem] w-[100%]  bg-white  border-gray-200">
        {/* <p className="font-[700] text-[1.875rem] text-gray-900">3/10</p> */}
        <CardHeader className="px-[0] py-0 gap-[18px]">
          <CardTitle className="font-[700] text-[30px] leading-[38px]">
            3/10
          </CardTitle>
          <CardDescription className="font-[600]">
            <span>30%</span> Correct on first attempt
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
