import React from "react";

const ITEMS = ["item1", "item2", "item3", "item4"];
const DragDrop = () => {
  const [dropItem, setDropItem] = React.useState(null);
  const handleDragStart = (e,index) => {
    console.log("Item dragged:", index);
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const rec = e.dataTransfer.getData("text/plain");
    console.log(rec);
    setDropItem((prev)=>[...prev, rec])
  };

  return (
    <div>
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
                onDragStart={(e) => {
                  handleDragStart(e,item);
                }}
              >
                {item}{" "}
              </div>
            ))
          : null}
      </div>
      <div
        style={{ width: "200px", background: "red", height: "200px" }}
        draggable
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        drop here
        <div></div>
      </div>
    </div>
  );
};

export default DragDrop;
