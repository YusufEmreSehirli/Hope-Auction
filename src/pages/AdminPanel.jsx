import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    category: "/books",
    // Diğer kategori özellikleri buraya eklenebilir
    title: "",
    author: "",
    price: "",
    image: "",
    location: "",
    original_price: "",
    currentBid: "",
    description: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [categoryProducts, setCategoryProducts] = useState([]);

  const categoryOptions = [
    {
      value: "/books",
      label: "Books",
      fields: ["title", "author", "price", "description", "image"],
    },
    {
      value: "/events",
      label: "Events",
      fields: [
        "title",
        "location",
        "price",
        "description",
        "image",
        "original_price",
      ],
    },
    {
      value: "/courses",
      label: "Courses",
      fields: ["title", "category", "price", "description", "image"],
    },
    {
      value: "/auctions",
      label: "Auctions",
      fields: ["title", "currentBid", "description", "image"],
    },
    {
      value: "/electronics",
      label: "Electronics",
      fields: ["name", "description", "price", "image"],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000${formData.category}`, formData);
      setSuccessMessage("Product added successfully!");
      setTimeout(() => setSuccessMessage(""), 3000); // 3 seconds
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000${formData.category}`
        );
        setCategoryProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [formData.category]);

  const renderFields = (fields) => {
    return fields.map((field) => (
      <div key={field} className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={field}
        >
          {field.charAt(0).toUpperCase() + field.slice(1).replace("_", " ")}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={field}
          type={field === "image" ? "file" : "text"}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          placeholder={`Enter ${field}`}
        />
      </div>
    ));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000${formData.category}/${id}`);
      setCategoryProducts(categoryProducts.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10 flex">
      <div className="w-1/2 pr-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Admin Panel</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {formData.category !== "" &&
            renderFields(
              categoryOptions.find(
                (option) => option.value === formData.category
              ).fields
            )}
          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block mx-auto"
            >
              Add Product
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="bg-green-200 text-green-800 px-4 py-2 rounded-md text-center">
            {successMessage}
          </div>
        )}
      </div>
      <div className="w-1/2 pl-4 books h-80  ">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {categoryOptions.find((option) => option.value === formData.category)
            ?.label || "Products"}
        </h2>
        <div className="overflow-y-auto ">
          <table className="table-auto border-collapse border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Title</th>
                {categoryOptions
                  .find((option) => option.value === formData.category)
                  ?.fields.includes("author") && (
                  <th className="border px-4 py-2">Author</th>
                )}
                <th className="border px-4 py-2">Price</th>
                {categoryOptions
                  .find((option) => option.value === formData.category)
                  ?.fields.includes("description") && (
                  <th className="border px-4 py-2">Description</th>
                )}
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categoryProducts.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.title}</td>
                  {categoryOptions
                    .find((option) => option.value === formData.category)
                    ?.fields.includes("author") && (
                    <td className="border px-4 py-2">{item.author}</td>
                  )}
                  <td className="border px-4 py-2">
                    {item.price || item.currentBid}
                  </td>
                  {categoryOptions
                    .find((option) => option.value === formData.category)
                    ?.fields.includes("description") && (
                    <td className="border px-4 py-2">{item.description}</td>
                  )}
                  <td className="border px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-auto"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
