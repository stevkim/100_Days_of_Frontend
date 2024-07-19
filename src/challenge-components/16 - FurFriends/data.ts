import type { TDOGGO } from "./types/dogType";
import koda from "@/assets/16 - FurFriends/koda.webp";
import bailey from "@/assets/16 - FurFriends/bailey.webp";
import jasper from "@/assets/16 - FurFriends/jasper.webp";
import nala from "@/assets/16 - FurFriends/nala.webp";
import teddy from "@/assets/16 - FurFriends/teddy.webp";

export const dogs: TDOGGO[] = [
  {
    id: 0,
    name: "Koda",
    image: koda,
    breed: "Border Collie",
    age: 72,
    weight: 40,
    height: 18,
    location: "Seattle, Washington",
    description:
      "Koda is a cheerful Border Collie, with a striking black and white coat that highlights his bright, expressive eyes. He is captured in a moment of relaxation, lying comfortably on a lush green lawn, with his tongue playfully hanging out. Koda's friendly and energetic nature is evident, making him a delightful companion.",
  },
  {
    id: 1,
    name: "Bailey",
    image: bailey,
    breed: "Shih Tzu",
    age: 36,
    weight: 22,
    height: 15,
    location: "Bend, Oregon",
    description:
      "Bailey is an adorable Shih Tzu with a fluffy coat and a sweet, expressive face. She is sitting against a vibrant pink background, wearing a cute floral bandana that adds to her charming appearance. Bailey's calm and affectionate demeanor makes her a delightful companion.",
  },
  {
    id: 2,
    name: "Jasper",
    image: jasper,
    breed: "Boston Terrier",
    age: 30,
    weight: 20,
    height: 16,
    location: "Vancouver, Washington",
    description:
      "Jasper is a distinguished Boston Terrier, known for his sleek, short coat and striking facial markings. With his alert ears and serious expression, he exudes a sense of intelligence and attentiveness. Posed against a dark background, Jasper's strong presence and dignified demeanor make him stand out as a remarkable and loyal companion.",
  },
  {
    id: 3,
    name: "Nala",
    image: nala,
    breed: "Siberian Husky",
    age: 4,
    weight: 22,
    height: 14,
    location: "Denver, Colorado",
    description:
      "Nala is a striking Siberian Husky with captivating blue eyes and a beautiful reddish-brown and white coat. Her alert ears and focused expression showcase her intelligence and curiosity. Sitting on a wooden floor, Nala's regal presence and energetic spirit make her a truly remarkable and charismatic companion.",
  },
  {
    id: 4,
    name: "Teddy",
    image: teddy,
    breed: "Appenzeller Sennenhund",
    age: 13,
    weight: 50,
    height: 20,
    location: "Las Vegas, Nevada",
    description:
      "Teddy is a robust and cheerful dog with a striking black, tan, and white coat, highlighted by his vibrant pink harness. He stands confidently on a scenic hillside, exuding energy and readiness for adventure. Teddy's friendly expression and alert posture showcase his spirited and loyal nature, making him a delightful companion for outdoor activities.",
  },
];
