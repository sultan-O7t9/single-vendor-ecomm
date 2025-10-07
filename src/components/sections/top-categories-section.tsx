import { categories } from "@/data/home-data";

export const TopCategoriesSection = () => {
  const topCategories = categories.slice(0, 12);

  return (
    <section className="bg-white wrapper py-20 px-base">
      <h2 className="h-section">Shop Our Top Categories</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {topCategories.map((category) => (
          <li
            key={category.id}
            className="bg-gray-300 rounded-[10px] aspect-[5/6.2] sm:text-center px-5 py-4 text-white font-semibold text-lg xl:text-xl hover:scale-95 transition-transform duration-300 cursor-pointer hover:shadow-md flex items-end"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
