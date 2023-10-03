import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function SortingQuestion({ hello }: any) {
  // State to store the user's sorted order
  const [userOrder, setUserOrder] = useState([
    "Option A",
    "Option B",
    "Option C",
    "Option D",
  ]);

  // Function to handle drag start
  const handleDragStart = (event: any, item: any) => {
    event.dataTransfer.setData("text/plain", item);
  };

  // Function to handle drag over
  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  // Function to handle drop
  const handleDrop = (event: any, index: any) => {
    const draggedItem = event.dataTransfer.getData("text/plain");
    const updatedOrder = [...userOrder];

    // Remove the dragged item
    const draggedIndex = updatedOrder.indexOf(draggedItem);
    updatedOrder.splice(draggedIndex, 1);

    // Insert the dragged item at the new position
    updatedOrder.splice(index, 0, draggedItem);

    setUserOrder(updatedOrder);
  };

  // Function to move an item up in the list
  const moveItemUp = (index: any) => {
    if (index > 0) {
      const updatedOrder = [...userOrder];
      const temp = updatedOrder[index];
      updatedOrder[index] = updatedOrder[index - 1];
      updatedOrder[index - 1] = temp;
      setUserOrder(updatedOrder);
    }
  };

  // Function to move an item down in the list
  const moveItemDown = (index: any) => {
    if (index < userOrder.length - 1) {
      const updatedOrder = [...userOrder];
      const temp = updatedOrder[index];
      updatedOrder[index] = updatedOrder[index + 1];
      updatedOrder[index + 1] = temp;
      setUserOrder(updatedOrder);
    }
  };

  return (
    <div>
      <ul>
        {userOrder.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {item}
            <Button onClick={() => moveItemUp(index)}>&uarr;</Button>
            <Button onClick={() => moveItemDown(index)}>&darr;</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortingQuestion;
