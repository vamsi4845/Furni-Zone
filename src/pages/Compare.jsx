import { useSelector, useDispatch } from "react-redux";
import { removeFromCompare, clearCompare } from "../features/compare/compareSlice";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils";
import { useState, useMemo } from "react";

const Compare = () => {
  const compareItems = useSelector((state) => state.compareState.compareItems);
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("name");
  const [isLoading, setIsLoading] = useState(false);

  const handleRemove = (id) => {
    dispatch(removeFromCompare(id));
  };

  const handleClearAll = () => {
    dispatch(clearCompare());
  };

  const sortedItems = useMemo(() => {
    setIsLoading(true);
    const sorted = [...compareItems].sort((a, b) => {
      if (sortBy === "name") {
        return a.attributes.title.localeCompare(b.attributes.title);
      } else if (sortBy === "price") {
        return a.attributes.price - b.attributes.price;
      }
      return 0;
    });
    setIsLoading(false);
    return sorted;
  }, [compareItems, sortBy]);

  if (compareItems.length === 0) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">Compare Products</h2>
        <p className="text-lg mb-4">Your compare list is empty.</p>
        <Link to="/products" className="btn btn-primary">
          Discover Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Compare Products</h2>
        <div className="flex gap-4">
          <select
            className="select select-bordered"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
          <button className="btn btn-error" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Company</th>
                <th>Color</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.attributes.image}
                      alt={item.attributes.title}
                      className="w-16 h-16 object-cover rounded lazy"
                      loading="lazy"
                    />
                  </td>
                  <td>{item.attributes.title}</td>
                  <td>{formatPrice(item.attributes.price)}</td>
                  <td>{item.attributes.company}</td>
                  <td>
                    <div className="flex gap-1">
                      {item.attributes.colors.map((color) => (
                        <span
                          key={color}
                          className="badge w-4 h-4"
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                  </td>
                  <td className="max-w-xs truncate">{item.attributes.description}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Compare;
