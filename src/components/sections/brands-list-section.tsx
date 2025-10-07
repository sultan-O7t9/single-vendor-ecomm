import { brands } from "@/data/home-data";

export const BrandsListSection = () => {
  return (
    <section className="bg-white wrapper pt-5 pb-20 px-base">
      <h2 className="h-section">Choose By Brand</h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <li
            key={brand.id}
            className="bg-[#F5F6F6] text-mmb-text-dark rounded-[10px] p-5 flex gap-4 items-center hover:scale-95 transition-transform duration-300 cursor-pointer hover:shadow-sm"
          >
            <div className="aspect-square w-[70px] h-[70px] md:w-10 md:h-10 xl:w-[70px] xl:h-[70px] bg-gray-300 rounded-full" />
            <div>
              <h4 className="font-semibold text-lg mb-2">{brand.title}</h4>
              <p className="text-[13px] font-medium">{brand.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
