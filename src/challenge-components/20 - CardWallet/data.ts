export type TTransaction = {
  id: string;
  type: "Work" | "Shopping" | "Food" | "Travel";
  date: number;
  amount: number;
};

export type TCard = {
  id: number;
  cardNumber: string;
  expireDate: string;
  balance: number;
  cvc: string;
  cardholderName: string;
  transactions: TTransaction[];
};

export const CARDS = [
  {
    id: 0,
    cardNumber: "4532 8615 3325 8976",
    expireDate: "12/26",
    balance: 5000,
    cvc: "123",
    cardholderName: "John Doe",
    transactions: [
      { id: "120", type: "Work", date: 1672531200, amount: 150.0 },
      { id: "121", type: "Shopping", date: 1672617600, amount: -75.5 },
      { id: "122", type: "Food", date: 1672704000, amount: -25.3 },
      { id: "123", type: "Travel", date: 1672790400, amount: -300.0 },
      { id: "124", type: "Shopping", date: 1672876800, amount: -60.0 },
      { id: "125", type: "Food", date: 1672963200, amount: -15.25 },
      { id: "126", type: "Work", date: 1673049600, amount: 200.0 },
      { id: "127", type: "Travel", date: 1673136000, amount: -500.5 },
      { id: "128", type: "Food", date: 1673222400, amount: -30.99 },
      { id: "129", type: "Shopping", date: 1673308800, amount: -120.0 },
    ],
  },
  {
    id: 1,
    cardNumber: "6011 5940 0312 4423",
    expireDate: "07/25",
    balance: 3000,
    cvc: "456",
    cardholderName: "Jane Smith",
    transactions: [
      { id: "130", type: "Shopping", date: 1674182800, amount: -140.0 },
      { id: "131", type: "Work", date: 1673405200, amount: 180.0 },
      { id: "132", type: "Shopping", date: 1673491600, amount: -45.75 },
      { id: "133", type: "Food", date: 1673578000, amount: -32.1 },
      { id: "134", type: "Travel", date: 1673664400, amount: -250.0 },
      { id: "135", type: "Shopping", date: 1673750800, amount: -85.2 },
      { id: "136", type: "Food", date: 1673837200, amount: -12.5 },
      { id: "137", type: "Work", date: 1673923600, amount: 300.0 },
      { id: "138", type: "Travel", date: 1674010000, amount: -400.75 },
      { id: "139", type: "Food", date: 1674096400, amount: -20.99 },
    ],
  },
  {
    id: 2,
    cardNumber: "3759 876512 52314",
    expireDate: "09/27",
    balance: 7500,
    cvc: "789",
    cardholderName: "Alice Johnson",
    transactions: [],
  },
];
