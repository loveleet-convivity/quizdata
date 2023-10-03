import dynamic from "next/dynamic";
import cloze_answer from "./cloze_answer";
import free_answer from "./free_answer";
import matrix_sort_answer from "./matrix_sort_answer";
import multiple from "./multiple";
import single from "./single";
import sort_answer from "./sort_answer";

export const DynamicQuestion = ({ questionType, ...props }: any) => {
  // Define the path to the question component based on the question type
  // const questionComponentPath = `./${questionType}`;
  const componentMap: any = {
    cloze_answer,
    free_answer,
    matrix_sort_answer,
    multiple,
    single,
    sort_answer,
  };
  const SelectedComponent = componentMap[questionType];

  // Use dynamic import to load the appropriate question component
  // const DynamicComponent = dynamic(() => import(`/${questionType}`), {
  //   ssr: false, // Disable server-side rendering for dynamic import
  //   loading: () => <p>Loading...</p>, // Render a loading indicator while loading
  // });

  return <div>{SelectedComponent && <SelectedComponent {...props} />}</div>;
};
