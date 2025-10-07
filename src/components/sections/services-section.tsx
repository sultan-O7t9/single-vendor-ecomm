import { services } from "@/data/home-data";

export const ServicesSection = () => {
  return (
    <section className="bg-white wrapper pt-5 pb-20 px-base">
      <h2 className="h-section">Services to help you shop</h2>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <li
            key={service.id}
            className="bg-[#F5F6F6] text-mmb-text-dark rounded-[10px] overflow-hidden flex flex-col aspect-[1/1.1505] hover:scale-95 transition-transform duration-300 cursor-pointer hover:shadow-md"
          >
            <div className="flex-1 p-10">
              <h4 className="flex flex-col font-bold text-[22px] gap-1 mb-5 capitalize leading-8 max-w-[230px]">
                {service.title}
              </h4>
              <p className="max-w-[230px]">{service.description}</p>
            </div>
            <div className="flex-1 aspect-[1.58/1] bg-gray-300" />
          </li>
        ))}
      </ul>
    </section>
  );
};
