import { memo } from "react";

const List = memo(({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
});

export default List;
