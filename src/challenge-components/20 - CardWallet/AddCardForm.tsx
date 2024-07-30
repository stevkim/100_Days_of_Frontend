import CardNumberIndicator from "./components/CardNumberIndicator";
import { useState, useContext } from "react";
import { CardContext } from "./CardWalletWrapper";

const AddCardForm = () => {
  const { addCard, cards } = useContext(CardContext);

  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [CVCCode, setCVCCode] = useState("");
  const [cardDefault, setCardDefault] = useState(false);

  //export type TCard = {
  //   id: number;
  //   cardNumber: string;
  //   expireDate: string;
  //   balance: number;
  //   cvc: string;
  //   cardholderName: string;
  //   transactions: TTransaction[];
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCard = {
      id: cards.length,
      cardholderName: name,
      cardNumber,
      expireDate,
      cvc: CVCCode,
      balance: 0,
      transactions: [],
    };

    addCard(newCard, cardDefault);
  };

  return (
    <form
      className="flex h-full flex-col gap-4 px-4 py-6"
      onSubmit={handleSubmit}
    >
      <button role="button" className="mr-auto">
        Back
      </button>
      <h1 className="mb-8 text-3xl">Add a Card</h1>
      <label hidden htmlFor="name">
        Name:
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="John Doe"
        className="w-full rounded-md border-2 p-2"
        onChange={(e) => setName(e.target.value)}
      />
      <label hidden htmlFor="cardNumber">
        Card Number:
      </label>
      <input
        id="cardNumber"
        name="cardNumber"
        type="text"
        placeholder="**** **** **** ****"
        className="w-full rounded-md border-2 p-2"
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <CardNumberIndicator cardNumber={cardNumber} />
      <div className="flex gap-4">
        <label hidden htmlFor="expireDate">
          Expiration Date:
        </label>
        <input
          id="expireDate"
          name="expireDate"
          type="text"
          placeholder="mm/yyyy"
          className="w-full rounded-md border-2 p-2"
          onChange={(e) => setExpireDate(e.target.value)}
        />
        <label hidden htmlFor="cvc">
          CVC
        </label>
        <input
          id="cvc"
          name="cvc"
          type="text"
          placeholder="CVC Code"
          className="w-full rounded-md border-2 p-2"
          onChange={(e) => setCVCCode(e.target.value)}
        />
      </div>
      <label>
        <input
          type="checkbox"
          className="mr-1"
          onChange={(e) => setCardDefault(e.target.checked)}
        />
        SET AS DEFAULT
      </label>

      <button
        className="mt-auto w-full rounded-md bg-blue-400 py-2 text-white"
        type="submit"
      >
        Add New Card
      </button>
    </form>
  );
};

export default AddCardForm;
