// 8 smaple dummy data of the home page properties grid
interface Property {
  images: string[];
  id: number;
  title: string;
  slug: string;
  type: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  tags: string[];
}

// Define the interface for the entire PropertiesData array
interface PropertiesDataInterface extends Array<Property> {}

export const PropertiesData: PropertiesDataInterface = [
  {
    images: [
      "/images/homes/house1.jpg",
      "/images/homes/house2.jpg",
      "/images/homes/house3.jpg",
      "/images/homes/house4.jpg",
      "/images/homes/house5.jpg",
    ],
    id: 1,
    title: "The harbour resident",
    slug: "the-harbour-resident",
    type: "House",
    price: 25000000,
    location: "Mel park,USA",
    bedrooms: 22,
    bathrooms: 2,
    tags: ["rent", "negotialble"],
  },
  {
    images: [
      "/images/homes/house2.jpg",
      "/images/homes/house3.jpg",
      "/images/homes/house4.jpg",
      "/images/homes/house5.jpg",
      "/images/homes/house1.jpg",
    ],
    id: 2,
    title: "The lake view cottage",
    slug: "the-lake-view-cottage",
    type: "Cottage",
    price: 35000,
    location: "Lake side,Canada",
    bedrooms: 32,
    bathrooms: 3,
    tags: ["sale", "luxury"],
  },
  {
    images: [
      "/images/homes/house3.jpg",
      "/images/homes/house4.jpg",
      "/images/homes/house5.jpg",
      "/images/homes/house1.jpg",
      "/images/homes/house2.jpg",
    ],
    id: 3,
    title: "The cozy apartment",
    slug: "the-cozy-apartment",
    type: "Apartment",
    price: 15000,
    location: "City center,UK",
    bedrooms: 12,
    bathrooms: 1,
    tags: ["rent", "affordable"],
  },
  {
    images: [
      "/images/homes/house4.jpg",
      "/images/homes/house5.jpg",
      "/images/homes/house1.jpg",
      "/images/homes/house2.jpg",
      "/images/homes/house3.jpg",
    ],
    id: 4,
    title: "The modern flat",
    slug: "the-modern-flat",
    type: "Flat",
    price: 20000,
    location: "Downtown,Australia",
    bedrooms: 22,
    bathrooms: 2,
    tags: ["sale", "stylish"],
  },
  {
    images: [
      "/images/homes/house5.jpg",
      "/images/homes/house1.jpg",
      "/images/homes/house2.jpg",
      "/images/homes/house3.jpg",
      "/images/homes/house4.jpg",
    ],
    id: 5,
    title: "The rustic cottage",
    slug: "the-rustic-cottage",
    type: "Cottage",
    price: 10000,
    location: "Mountain area,New Zealand",
    bedrooms: 12,
    bathrooms: 1,
    tags: ["rent", "nature"],
  },
  {
    images: [
      "/images/homes/house1.jpg",
      "/images/homes/house2.jpg",
      "/images/homes/house3.jpg",
      "/images/homes/house4.jpg",
      "/images/homes/house5.jpg",
    ],
    id: 6,
    title: "The beach house",
    slug: "the-beach-house",
    type: "House",
    price: 30000,
    location: "Sea shore,France",
    bedrooms: 32,
    bathrooms: 2,
    tags: ["sale", "vacation"],
  },
  {
    images: [
      "/images/homes/house2.jpg",
      "/images/homes/house3.jpg",
      "/images/homes/house4.jpg",
      "/images/homes/house5.jpg",
      "/images/homes/house1.jpg",
    ],
    id: 7,
    title: "The penthouse suite",
    slug: "the-penthouse-suite",
    type: "Apartment",
    price: 40000,
    location: "Skyline,Dubai",
    bedrooms: 42,
    bathrooms: 4,
    tags: ["rent", "exclusive"],
  },
  {
    images: [
      "/images/homes/house3.jpg",
      "/images/homes/house4.jpg",
      "/images/homes/house5.jpg",
      "/images/homes/house1.jpg",
      "/images/homes/house2.jpg",
    ],
    id: 8,
    title: "The country cottage",
    slug: "the-country-cottage",
    type: "Cottage",
    price: 12000,
    location: "Rural area,Ireland",
    bedrooms: 22,
    bathrooms: 1,
    tags: ["sale", "charming"],
  },
  {
    images: [
      "/images/homes/house4.jpg",
      "/images/homes/house5.jpg",
      "/images/homes/house1.jpg",
      "/images/homes/house2.jpg",
      "/images/homes/house3.jpg",
    ],
    id: 9,
    title: "The urban studio",
    slug: "the-urban-studio",
    type: "Studio",
    price: 18000,
    location: "Metro city,India",
    bedrooms: 12,
    bathrooms: 1,
    tags: ["rent", "convenient"],
  },
  {
    images: [
      "/images/homes/house5.jpg",
      "/images/homes/house1.jpg",
      "/images/homes/house2.jpg",
      "/images/homes/house3.jpg",
      "/images/homes/house4.jpg",
    ],
    id: 10,
    title: "The castle mansion",
    slug: "the-castle-mansion",
    type: "Mansion",
    price: 50000,
    location: "Historic site,Germany",
    bedrooms: 52,
    bathrooms: 5,
    tags: ["sale", "majestic"],
  },
];
