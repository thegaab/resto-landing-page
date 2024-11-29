import dish1 from "../assets/dish01.jpg";
import dish2 from "../assets/dish02.jpg";
import dish3 from "../assets/dish03.jpg";
import dish4 from "../assets/dish04.jpg";
import dish5 from "../assets/dish05.jpg";
import dish6 from "../assets/dish06.jpg";
import dish7 from "../assets/dish07.jpg";
import dish8 from "../assets/dish08.jpg";
import dish9 from "../assets/dish09.jpg";
import dish10 from "../assets/dish10.jpg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Sushi Combo",
    description: "A selection of assorted sushi, including nigiri, sashimi, and rolls.",
  },
  {
    image: dish2,
    title: "Ramen",
    description: "A traditional soup with noodles, rich broth, slices of pork, boiled egg, and vegetables.",
  },
  {
    image: dish3,
    title: "Tempura",
    description: "Seafood and vegetables battered and deep-fried, served with a special dipping sauce.",
  },
  {
    image: dish4,
    title: "Yakitori",
    description: "Grilled chicken skewers with tare sauce.",
  },
  {
    image: dish5,
    title: "Udon",
    description: "Thick wheat noodles served in hot broth with tofu, shrimp, or meat.",
  },
  {
    image: dish6,
    title: "Takoyaki",
    description: "Octopus-filled dough balls, topped with special sauce, mayonnaise, and bonito flakes.",
  },
  {
    image: dish7,
    title: "Sashimi Deluxe",
    description: "Fresh slices of raw fish, such as salmon, tuna, and whitefish.",
  },
  {
    image: dish8,
    title: "Okonomiyaki",
    description: "Japanese pancake made with cabbage, meat or seafood, topped with sauce and mayonnaise.",
  },
  {
    image: dish9,
    title: "Gyoza",
    description: "Dumplings filled with pork and vegetables, pan-fried and served with soy sauce.",
  },
  {
    image: dish10,
    title: "Donburi",
    description:
      "A bowl of rice topped with meats or seafood, like the famous Gyudon (beef bowl).",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "01.",
    image: italian,
    title: "Dessert",
    description:
      "Delight in the sweet and subtle flavors of traditional Japanese desserts. Desserts than provide a perfect balance to your meal.",
  },
  {
    number: "03.",
    image: indian,
    title: "Drinks",
    description:
      "Savor the unique and refreshing drinks of Japan, blending tradition with modern flavors.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
