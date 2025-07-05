import React from "react";

const ITEMS = ["item1", "item2", "item3", "item4"];
const DragDrop = () => {
  const handleDragStart = (index) => {
    console.log("Item dragged:", index);
  };

  const handleDrop = () => {
    console.log("Item dropped");
  };
  return (
    <div style={{ width: "400px", background: "lightBlue", padding: "10px" }}>
      DragDrop
      {ITEMS
        ? ITEMS?.map((item) => (
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
              onDragStart={() => {
                handleDragStart(item);
              }}
              // onDragOver={(e) => {
              //   e.preventDefault();
              // }}
              onDrop={() => {
                handleDrop(item);
              }}
            >
              {item}{" "}
            </div>
          ))
        : null}
    </div>
  );
};

export default DragDrop;
