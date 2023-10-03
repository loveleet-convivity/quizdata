import React, { Suspense } from "react";
import QuizData from "./components/quizData";

const Page = ({ params }: any) => {
  return (
    <>
      <Suspense fallback={<p>Loading....</p>}>
        <QuizData id={params.id} />
      </Suspense>
    </>
  );
};

export default Page;
