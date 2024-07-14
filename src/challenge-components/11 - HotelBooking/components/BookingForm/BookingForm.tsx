import DatePicker from "../DatePicker/DatePicker";
import DateInput from "./DateInput";
import GuestCount from "./GuestCount";
import { useState } from "react";

interface BookingFormProps {
  name: string;
}

const BookingForm = ({ name }: BookingFormProps) => {
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guestCount, setGuestCount] = useState({ adult: 1, children: 0 });

  const handleChange = (e: { start: Date | null; end: Date | null }) => {
    setStartDate(e.start);
    setEndDate(e.end);
  };

  const toggleVisible = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setVisible(!visible);
  };

  const updateGuestCount = (type: string, value: number) => {
    setGuestCount({ ...guestCount, [type]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      return alert("Please pick valid dates");
    }

    alert(
      `Room booked for ${guestCount.adult} adult(s) and ${guestCount.children} child(s) @ ${name}

      From ${startDate?.toDateString()}
      to ${endDate?.toDateString()}`,
    );
  };

  return (
    <form
      className="flex h-full w-full flex-col gap-4 md:w-[45%]"
      onClick={() => {
        setVisible(false);
      }}
    >
      <h4 className="text-2xl font-bold">Book a Room at {name}</h4>
      <DateInput
        name="Check in"
        value={startDate}
        toggleVisible={toggleVisible}
      />
      <DateInput
        name="Check out"
        value={endDate}
        toggleVisible={toggleVisible}
      />
      <GuestCount updateGuestCount={updateGuestCount} />
      {visible ? (
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          className="absolute left-[45%] top-4 z-[10] shadow-lg"
          onChange={handleChange}
        />
      ) : null}
      <button
        onClick={handleSubmit}
        className="mt-auto w-full rounded-xl bg-secondary-blue py-2 font-semibold text-white hover:bg-primary-blue"
      >
        Book a Room
      </button>
    </form>
  );
};

export default BookingForm;
