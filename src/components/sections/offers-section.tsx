import { offers } from "@/data/home-data";

export const OffersSection = () => {
  return (
    <section className="bg-white wrapper pt-5 pb-20 px-base">
      <h2 className="h-section">Get Up To 70% Off</h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <li
            key={offer.id}
            className="rounded-[10px] overflow-hidden flex flex-col hover:scale-95 transition-transform duration-300 cursor-pointer hover:shadow-md"
            style={{ background: offer.color2 }}
          >
            <div className="flex-1 p-7">
              <h4 className="flex flex-col font-bold text-[22px] gap-1 mb-3">
                Save
                <span style={{ color: offer.color1 }} className="text-5xl">
                  {offer.discount}
                </span>
              </h4>
              <p>{offer.description}</p>
            </div>
            <div className="flex-1 aspect-[1.5/1] bg-gray-200" />
          </li>
        ))}
      </ul>
    </section>
  );
};
