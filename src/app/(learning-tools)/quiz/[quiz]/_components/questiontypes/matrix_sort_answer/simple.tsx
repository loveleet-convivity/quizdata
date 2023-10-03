import React, { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ItemTypes = {
  DRAGGABLE_ITEM: "draggableItem",
};

const DraggableItem = ({ item, onDrop }: any) => {
  const [, ref] = useDrag({
    type: ItemTypes.DRAGGABLE_ITEM,
    item: { id: item.id, text: item.text },
  });

  // State to track whether the item is being dragged
  const [isDragging, setIsDragging] = useState(false);

  // Function to handle the start of a drag operation
  const handleStartDrag = () => {
    setIsDragging(true);
  };

  // Function to handle the end of a drag operation
  const handleEndDrag = () => {
    setIsDragging(false);
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

const SortElement = ({ item, columnIndex, onDrop, onRemove }: any) => {
  const [, ref] = useDrop({
    accept: ItemTypes.DRAGGABLE_ITEM,
    drop: (droppedItem) => {
      if (!item) {
        onDrop(droppedItem, columnIndex);
      }
    },
  });

  const handleClick = () => {
    if (!item) {
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
        <div className="bg-gray-200 px-2 py-1 flex justify-between">
          {item.text}
          <button
            className="remove-button"
            onClick={() => {
              onRemove(columnIndex);
            }}
          >
            ✖
          </button>
        </div>
      ) : (
        "Drop Here"
      )}
    </div>
  );
};

const MatrixSortingQuestion = ({ hello }: any) => {
  const criteria = ["Criterion 1", "Criterion 2", "Criterion 3"];
  const [sortLeftElements, setSortLeftElements] = useState(
    criteria.map(() => null)
  );
  const [sortRightElements, setSortRightElements] = useState(
    criteria.map(() => null)
  );
  const [draggableItems, setDraggableItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);

  const data = [
    {
      id: 1,
      left: {
        text: "text",
        static: true,
      },
      right: {
        text: "text",
        static: false,
      },
    },
    {
      id: 2,
      left: {
        text: "text",
        static: false,
      },
      right: {
        text: "text",
        static: true,
      },
    },
    {
      id: 3,
      left: {
        text: "text",
        static: false,
      },
      right: {
        text: "text",
        static: true,
      },
    },
  ];

  const handleLeftDrop = (item: any, columnIndex: any) => {
    if (columnIndex === -1) {
      // Handle dropping to draggable items area
      if (!item) {
        return;
      }

      console.log(columnIndex);

      // const updatedItems = draggableItems.concat([item]);
      // setDraggableItems(updatedItems);
    } else {
      // Handle dropping to sort elements area
      if (!item) {
        return;
      }

      const updatedSortElements = [...sortLeftElements];
      updatedSortElements[columnIndex] = item;
      setSortLeftElements(updatedSortElements);

      const updatedItems = draggableItems.filter(
        (draggableItem) => draggableItem.id !== item.id
      );
      setDraggableItems(updatedItems);
    }
  };
  const handleRightDrop = (item: any, columnIndex: any) => {
    if (columnIndex === -1) {
      // Handle dropping to draggable items area
      if (!item) {
        return;
      }

      console.log(columnIndex);

      // const updatedItems = draggableItems.concat([item]);
      // setDraggableItems(updatedItems);
    } else {
      // Handle dropping to sort elements area
      if (!item) {
        return;
      }

      const updatedSortElements = [...sortRightElements];
      updatedSortElements[columnIndex] = item;
      setSortRightElements(updatedSortElements);

      const updatedItems = draggableItems.filter(
        (draggableItem) => draggableItem.id !== item.id
      );
      setDraggableItems(updatedItems);
    }
  };

  const handleLeftRemove = (columnIndex: any) => {
    const removedItem = sortLeftElements[columnIndex];
    const updatedSortElements = [...sortLeftElements];
    updatedSortElements[columnIndex] = null;
    setSortLeftElements(updatedSortElements);

    if (removedItem) {
      const updatedItems = draggableItems.concat([removedItem]);
      setDraggableItems(updatedItems);
    }
  };
  const handleRightRemove = (columnIndex: any) => {
    const removedItem = sortRightElements[columnIndex];
    const updatedSortElements = [...sortRightElements];
    updatedSortElements[columnIndex] = null;
    setSortRightElements(updatedSortElements);

    if (removedItem) {
      const updatedItems = draggableItems.concat([removedItem]);
      setDraggableItems(updatedItems);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-[0.5rem]">
        <div className="draggable-items flex flex-col gap-[0.25rem]">
          <h2 className="font-[600] text-[0.875rem]">Sort elements</h2>
          <div className="flex gap-[1rem]">
            {draggableItems.map((item) => (
              <DraggableItem
                key={item.id}
                item={item}
                onDrop={(item: any) => handleLeftDrop(item, -1)}
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
            {data.map((row, columnIndex) => (
              <TableRow key={columnIndex}>
                <TableCell>
                  {row.left.static ? (
                    row.left.text
                  ) : (
                    <SortElement
                      item={sortLeftElements[columnIndex]}
                      columnIndex={columnIndex}
                      onDrop={(item: any) => handleLeftDrop(item, columnIndex)}
                      onRemove={(columnIndex: any) =>
                        handleLeftRemove(columnIndex)
                      }
                    />
                  )}
                </TableCell>
                <TableCell>
                  {row.right.static ? (
                    row.right.text
                  ) : (
                    <SortElement
                      item={sortRightElements[columnIndex]}
                      columnIndex={columnIndex}
                      onDrop={(item: any) => handleRightDrop(item, columnIndex)}
                      onRemove={(columnIndex: any) =>
                        handleRightRemove(columnIndex)
                      }
                    />
                  )}
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
