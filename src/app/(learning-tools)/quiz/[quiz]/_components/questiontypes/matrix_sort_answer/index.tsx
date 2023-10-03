"use client";
import { quizSelector, setInputAnswer } from "@/app/state/slices/quizSlice";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import React, { useEffect, useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";

const ItemTypes = {
  DRAGGABLE_ITEM: "draggableItem",
};

const DraggableItem = ({ item, onDrop, isDraggingEnabled }: any) => {
  const [, ref] = useDrag({
    type: ItemTypes.DRAGGABLE_ITEM,
    item: { id: item.id, text: item.text },
  });

  // State to track whether the item is being dragged
  const [isDragging, setIsDragging] = useState(false);

  // Function to handle the start of a drag operation
  const handleStartDrag = () => {
    if (isDraggingEnabled) {
      setIsDragging(true);
    }
  };

  // Function to handle the end of a drag operation
  const handleEndDrag = () => {
    if (isDraggingEnabled) {
      setIsDragging(false);
    }
  };

  // Function to handle a click on the item
  const handleClick = () => {
    // Only trigger the drop action if the item is not being dragged
    if (!isDragging) {
      onDrop(item);
    }
  };

  return (
    <div
      ref={(node) => ref(node)}
      className="draggable-item bg-gray-200 px-2 py-1"
      onMouseDown={handleStartDrag}
      onMouseUp={handleEndDrag}
      onClick={handleClick}
    >
      {item.text}
    </div>
  );
};

const SortElement = ({
  item,
  columnIndex,
  onDrop,
  onRemove,
  isDraggingEnabled,
}: any) => {
  const [, ref] = useDrop({
    accept: ItemTypes.DRAGGABLE_ITEM,
    drop: (droppedItem) => {
      if (!item && isDraggingEnabled) {
        onDrop(droppedItem, columnIndex);
      }
    },
  });

  const handleClick = () => {
    if (!item && isDraggingEnabled) {
      onDrop(null, columnIndex);
    }
  };

  return (
    <div
      ref={ref}
      className="sort-element"
      onClick={handleClick}
      onDragOver={(e) => e.preventDefault()} // Prevent default drag-over behavior
    >
      {item ? (
        <div className="bg-gray-200 px-2 py-1 w-[50%] flex items-center justify-between">
          {item.text}
          {!isDraggingEnabled ? null : (
            <button
              className="remove-button"
              onClick={() => {
                onRemove(columnIndex);
              }}
            >
              ✖
            </button>
          )}
        </div>
      ) : (
        <div className="px-[0.75rem] py-[0.25rem] bg-gray-100 w-[50%] italic">
          {"Drop Here"}
        </div>
      )}
    </div>
  );
};

const MatrixSortingQuestion = ({ currentQuestion }: any) => {
  const { questionlist, inputAnswer } = useSelector(quizSelector);
  const answerdata = questionlist.find(
    (q: any) => q.id === currentQuestion
  ).answer;
  const criteria = answerdata?.map((item: any) => item._answer);
  const [sortElements, setSortElements] = useState(
    inputAnswer && inputAnswer?.every((val: any) => val !== null)
      ? inputAnswer
      : criteria?.map(() => null)
  );
  const [draggableItems, setDraggableItems]: any = useState(null);
  const question = questionlist.find((q: any) => q.id === currentQuestion);
  const dispatch = useDispatch();

  const isDraggingEnabled =
    question.status!=="FLAGGED" &&
    question.studentAttempts < question.questionAttempts &&
    question.status !=="CORRECT";
  useEffect(() => {
    const shuffleOrder = () => {
      const shuffledOrder = answerdata?.map((item: any, id: any) => ({
        id: id + 1,
        text: item._sortString,
      }));
      for (let i = shuffledOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOrder[i], shuffledOrder[j]] = [
          shuffledOrder[j],
          shuffledOrder[i],
        ];
      }
      setDraggableItems(inputAnswer ? [] : shuffledOrder);
    };
    shuffleOrder();
  }, [answerdata]);

  const handleDrop = (item: any, columnIndex: any) => {
    if (columnIndex === -1) {
      // Handle dropping to draggable items area
      if (!item) {
        return;
      }

      // const updatedItems = draggableItems.concat([item]);
      // setDraggableItems(updatedItems);
    } else {
      // Handle dropping to sort elements area
      if (!item) {
        return;
      }

      const updatedSortElements = [...sortElements];
      updatedSortElements[columnIndex] = item;
      setSortElements(updatedSortElements);
      dispatch(setInputAnswer(updatedSortElements));

      const updatedItems = draggableItems.filter(
        (draggableItem: any) => draggableItem.id !== item.id
      );
      setDraggableItems(updatedItems);
    }
  };

  const handleRemove = (columnIndex: any) => {
    const removedItem = sortElements[columnIndex];
    const updatedSortElements = [...sortElements];
    updatedSortElements[columnIndex] = null;
    setSortElements(updatedSortElements);
    dispatch(setInputAnswer(updatedSortElements));

    if (removedItem) {
      const updatedItems = draggableItems.concat([removedItem]);
      setDraggableItems(updatedItems);
    }
  };
  // console.log(sortElements, "<<<<draggable items");
  if (draggableItems === null) {
    return null; // Return null while data is loading
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-[0.5rem]">
        <div className="draggable-items flex flex-col gap-[0.25rem]">
          <p className="font-[600] text-[0.875rem]">Sort elements</p>
          <div className="flex gap-[1rem]">
            {draggableItems?.map((item: any) => (
              <DraggableItem
                key={item.id}
                item={item}
                onDrop={(item: any) => handleDrop(item, -1)}
                isDraggingEnabled={isDraggingEnabled}
              />
            ))}
          </div>
        </div>
        <Table className="matrix-table border">
          {/* <TableHeader>
            <TableRow>
              <TableHead>Criteria</TableHead>
              <TableHead>Sort Elements</TableHead>
            </TableRow>
          </TableHeader> */}
          <TableBody>
            {criteria.map((criterion: any, columnIndex: any) => (
              <TableRow key={columnIndex}>
                <TableCell>{criterion}</TableCell>
                <TableCell>
                  <SortElement
                    item={sortElements[columnIndex]}
                    columnIndex={columnIndex}
                    onDrop={(item: any) => handleDrop(item, columnIndex)}
                    onRemove={(columnIndex: any) => handleRemove(columnIndex)}
                    isDraggingEnabled={isDraggingEnabled}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DndProvider>
  );
};

export default MatrixSortingQuestion;
