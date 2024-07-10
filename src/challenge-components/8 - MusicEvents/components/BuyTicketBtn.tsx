import { Ticket } from "lucide-react";

const BuyTicketBtn = () => {
  return (
    <button className="flex flex-row items-center rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-75">
      <Ticket
        size={16}
        className="mr-1 text-black invert"
        color="white"
        stroke="white"
        fill="currentColor"
      />
      Buy a Ticket
    </button>
  );
};

export default BuyTicketBtn;
