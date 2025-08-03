import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Beautiful Beach House",
    rating: 4.5,
    address: { city: "Miami", country: "USA" },
    image: "/images/beach-house.jpg",
    description: "A beautiful beach house with stunning ocean views.",
    category: ["Wi-Fi", "Kitchen", "Free parking", "Air conditioning"],
    price: 200,
    reviews: [
      {
        name: "John Doe",
        rating: 5,
        comment: "Amazing stay! Highly recommend.",
        avatar: "/avatars/john.jpg",
      },
      {
        name: "Jane Smith",
        rating: 4,
        comment: "Very comfortable and clean.",
        avatar: "/avatars/jane.jpg",
      },
    ],
    host: {
      name: "Alice Host",
      description: "Experienced host with great reviews.",
    },
  },
  // Add more properties...
];
