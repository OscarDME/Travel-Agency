import { ITravel } from "@/types";

export const NAV_ITEMS = [
    { href: "/about", label: "Nosotros" },
    { href: "/reservations", label: "Viajes" },
    { href: "/contact", label: "Contacto" },
  ];

  export const TRAVEL_INFO: ITravel[] = [
    {
      id: 1,
      title: "Viaje a Puebla y sus alrededores",
      description: "Descubre la belleza de la playa en este viaje inolvidable.",
      image: "/images/beach.jpg",
      price: 4500,
    },
    {
      id: 2,
      title: "Viaje a la Huasteca Potosina",
      description: "Sumérgete en la naturaleza en este emocionante viaje.",
      image: "/images/mountain.jpg",
      price: 3000,
    },
    {
      id: 3,
      title: "Viaje a la Ciudad de México",
      description: "Explora la cultura y la historia de la ciudad en este viaje.",
      image: "/images/city.jpg",
      price: 1500,
    },
  ]
  