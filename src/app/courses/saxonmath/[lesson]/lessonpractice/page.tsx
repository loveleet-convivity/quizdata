"use client";
import { useLayoutEffect, useRef, useState } from "react";
import Question from "./_components/questioncontainer/question";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlagInfo from "./_components/quizsidebar/flaginfo";
import QuizSidebar from "./_components/quizsidebar/quizsidebar";
import SidebarHead from "./_components/quizsidebar/sidebarhead";
import SidebarNavigation from "./_components/quizsidebar/sidebarnavigation";
import QuestionBox from "./_components/questioncontainer/questionbox";
import QuestionBoxTools from "./_components/questioncontainer/questionboxtools";
import QuizBreadcrumb from "./_components/questioncontainer/quizbreadcrumb";
import QuizFooter from "./_components/questioncontainer/quizfooter";
import QuestionContent from "./_components/questioncontainer/questioncontent";
import { data } from "./data";
import ToolkitSidebar from "./_components/quiztoolkit/toolkitsidebar";
import Breadcrumbs from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";
export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const ref: any = useRef(null);
  const [btnheight, setBtnHeight] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarContent, setSidebarContent] = useState("");
  const { lesson } = useParams();
  // const { lesson } = router.query;

  useLayoutEffect(() => {
    setBtnHeight(ref.current.offsetHeight);
  }, []);
  const breadcrumbs = [
    { path: "/courses", label: "Courses" },
    { path: `/courses/saxonmath`, label: "Saxon Math" },
    { path: `/courses/saxonmath/lesson`, label: `Lesson ${lesson}` },
    {
      path: `/courses/saxonmath/lesson/lessonpractice`,
      label: "Lesson Practice",
    },
    {
      path: `/courses/saxonmath/lesson/lessonpractice/quiz`,
      label: "Quiz",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);

    // update the button class
  };
  const [questions, setQuestions] = useState(data);

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  return (
    <div className="flex bg-[#F7F5F1] max-md:h-[100vh] w-full relative container max-w-[90rem] mx-auto px-0">
      <aside className="flex max-md:flex-col-reverse h-[100vh]">
        <div className="max-md:absolute max-md:top-10">
          {isSidebarVisible && (
            <QuizSidebar
              btn={btnheight}
              data={questions}
              setter={setCurrentQuestion}
            >
              <SidebarHead />
              <SidebarNavigation />
            </QuizSidebar>
          )}
        </div>
        <Button
          variant="link"
          className={`mt-8 max-md:mt-0 p-0 max-md:absolute top-2 bg-white z-30 rounded-full h-[2.5rem] w-[2.5rem] max-md:-rotate-90 ml-2  mr-2 ${
            isSidebarVisible ? "" : "rotate-180 max-md:rotate-90"
          }`}
          onClick={toggleSidebar}
          ref={ref}
        >
          <ChevronLeft className="mx-auto" />
        </Button>
        <FlagInfo isSidebarVisible={isSidebarVisible} />
      </aside>
      <Question show={isSidebarVisible} btn={btnheight}>
        {/* <QuizBreadcrumb /> */}
        <Breadcrumbs crumbs={breadcrumbs} />
        <QuestionBox>
          <QuestionContent data={currentQuestion} />
          <QuestionBoxTools
            setShowSidebar={setShowSidebar}
            setSidebarContent={setSidebarContent}
            sidebarContent={sidebarContent}
          />
        </QuestionBox>
        <QuizFooter />
      </Question>
      <ToolkitSidebar
        showSidebar={showSidebar}
        sidebarContent={sidebarContent}
        setSidebarContent={setSidebarContent}
        setShowSidebar={setShowSidebar}
      />
    </div>
  );
}
