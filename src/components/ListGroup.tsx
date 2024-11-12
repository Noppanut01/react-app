import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onClose: () => void;
}

function ListGroup({ items, heading, onClose }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   heading = "";

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <div
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
      >
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                console.log(item);
              }}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

export default ListGroup;
