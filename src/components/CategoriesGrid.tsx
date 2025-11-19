const categories = ['Clothing', 'Accessories', 'Footwear', 'Bags'];

const CategoriesGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {categories.map((category, index) => (
        <div key={index} className="border p-4 text-center">
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoriesGrid;
