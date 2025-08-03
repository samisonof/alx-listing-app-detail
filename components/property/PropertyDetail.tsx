import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("offer");

  return (
    <div className="container mx-auto p-6 md:flex md:space-x-8">
      {/* Left Section */}
      <div className="md:flex-1">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} stars</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
          {/* You can add more images if available */}
        </div>

        {/* Tabs for Description */}
        <div className="mt-8">
          <div className="flex space-x-4 border-b">
            <button
              className={`py-2 px-4 font-semibold ${activeTab === "offer" ? "border-b-2 border-blue-600" : ""}`}
              onClick={() => setActiveTab("offer")}
            >
              What we offer
            </button>
            <button
              className={`py-2 px-4 font-semibold ${activeTab === "reviews" ? "border-b-2 border-blue-600" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={`py-2 px-4 font-semibold ${activeTab === "host" ? "border-b-2 border-blue-600" : ""}`}
              onClick={() => setActiveTab("host")}
            >
              About host
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "offer" && (
              <>
                <p>{property.description}</p>
                <h3 className="text-2xl font-semibold mt-6">Amenities</h3>
                <ul className="flex flex-wrap space-x-4 mt-2">
                  {property.category.map((amenity, index) => (
                    <li key={index} className="bg-gray-200 p-2 rounded-md">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {activeTab === "reviews" && <ReviewSection reviews={property.reviews} />}
            {activeTab === "host" && (
              <div>
                <h3 className="text-xl font-semibold">{property.host.name}</h3>
                <p>{property.host.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 mt-8 md:mt-0">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
