import { useSelector } from "react-redux";

function ProductList() {
  const data = useSelector((state) => state.data);

  return (
    <div className="w-full p-4  sm:p-10 ">
      <div className="w-full   grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3">
        {data.map((data) => (
          <div
            className="bg-white w-full p-3 shadow-2xl flex flex-col items-center gap-3 rounded-lg overflow-hidden"
            key={data.id}
          >
            <img
              className=" w-[90%] h-[50%] object-contain"
              src={data.images[0]}
              alt=""
            />
            <div className="overflow-hidden space-y-2">
              <h4 className="font-bold">₹{data.price}</h4>
              <h3 className="text-s">{data.name}</h3>
              <p className="text-xs">Condition: {data.condition}</p>
              <p className="text-xs">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
