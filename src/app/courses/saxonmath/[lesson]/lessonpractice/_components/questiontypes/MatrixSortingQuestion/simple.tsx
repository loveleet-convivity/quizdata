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

const MatrixSortingQuestion = () => {
  const criteria = ["Criterion 1", "Criterion 2", "Criterion 3"];
  const [sortElements, setSortElements] = useState(criteria.map(() => null));
  const [draggableItems, setDraggableItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);

  const handleDrop = (item: any, columnIndex: any) => {
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

      const updatedSortElements = [...sortElements];
      updatedSortElements[columnIndex] = item;
      setSortElements(updatedSortElements);

      const updatedItems = draggableItems.filter(
        (draggableItem) => draggableItem.id !== item.id
      );
      setDraggableItems(updatedItems);
    }
  };

  const handleRemove = (columnIndex: any) => {
    const removedItem = sortElements[columnIndex];
    const updatedSortElements = [...sortElements];
    updatedSortElements[columnIndex] = null;
    setSortElements(updatedSortElements);

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
                onDrop={(item: any) => handleDrop(item, -1)}
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
            {criteria.map((criterion, columnIndex) => (
              <TableRow key={columnIndex}>
                <TableCell>{criterion}</TableCell>
                <TableCell>
                  <SortElement
                    item={sortElements[columnIndex]}
                    columnIndex={columnIndex}
                    onDrop={(item: any) => handleDrop(item, columnIndex)}
                    onRemove={(columnIndex: any) => handleRemove(columnIndex)}
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
