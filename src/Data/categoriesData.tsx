// dummy data of the categories secttion of the home page
interface CategoriesDataProps {
  id: number;
  img: string;
  title: string;
  listings: number;
}

export const CategoriesData: CategoriesDataProps[] = [
  {
    id: 1,
    title: "Houses",
    listings: 15,
    img: "/images/homes/house1.jpg",
  },
  {
    id: 2,
    title: "Apartments",
    listings: 10,
    img: "/images/homes/apartment.jpg",
  },
  {
    id: 3,
    title: "Cottages",
    listings: 8,
    img: "/images/homes/cottage.jpg",
  },
];
