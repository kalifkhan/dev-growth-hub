import React, { useCallback, useState } from "react";

const ITEMS = ["item1", "item2", "item3", "item4"];
const DragDrop = () => {
  const [dropItem, setDropItem] = useState(ITEMS);
  const [startDragItem, setStartDragitem] = useState(null);

  const handleDragStart = (index) => {
    console.log("Item dragged:", index);
    setStartDragitem(index);
  };

  const handleOnDrop = useCallback((dropIndex) => {
    console.log(dropIndex);
    const nextItemToaddIndex = startDragItem;
    console.log(dropIndex, nextItemToaddIndex);
    // setDropItem((prev) => {
    //   return;
    // });
    setDropItem((prev) => {
      const updated = [...prev];
      
      const draggedItem = updated.splice(startDragItem, 1)[0];
      updated.splice(dropIndex, 0, draggedItem)

      return updated;
    });
  },[startDragItem]);

  return (
    <div>
      <div
        style={{
          width: "400px",
          background: "lightBlue",
          padding: "10px",
          margin: "10px",
        }}
      >
        DragDrop
        {dropItem
          ? dropItem?.map((item, index) => (
              <div
                key={item}
                style={{
                  border: "1px solid black",
                  marginBottom: "10px",
                  background: "grey",
                  cursor: "pointer",
                  padding: "10px",
                }}
                draggable
                onDragStart={(e) => {
                  handleDragStart(index);
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={() => {
                  handleOnDrop(index);
                }}
              >
                {item}{" "}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default DragDrop;
