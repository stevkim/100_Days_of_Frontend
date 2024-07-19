export type TDOGGO = {
  id: number;
  name: string;
  image: string;
  sex: string;
  breed: string;
  age: number; // in months
  weight: number; // in lbs
  height: number; // in inches
  location: { lat: number; long: number };
  description: string;
};
