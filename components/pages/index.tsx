import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/Pill";

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Beachfront", "Free Parking"];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="h-64 bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/assets/images/hero.jpg')" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">Find your favorite place here!</h1>
        <p className="text-lg mt-4">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Section */}
      <section className="my-6 flex flex-wrap gap-3 justify-center">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">{property.name}</h3>
            <p className="text-gray-600 text-sm">
              {property.address.city}, {property.address.country}
            </p>
            <div className="mt-2 text-yellow-500">⭐ {property.rating}</div>
            <div className="text-blue-700 font-semibold mt-2">${property.price}/night</div>
          </div>
        ))}
      </section>
    </>
  );
}
