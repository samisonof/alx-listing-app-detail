import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  // Calculate total nights between check-in and check-out dates
  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    return Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0);
  };

  const nights = getNights();
  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-20">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label className="block font-medium">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-2 rounded"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div className="mt-4">
        <label className="block font-medium">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-2 rounded"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          min={checkIn || new Date().toISOString().split("T")[0]}
        />
      </div>

      <div className="mt-4 text-lg">
        Total payment: <strong>${total}</strong> {nights > 0 && <span>({nights} night{nights > 1 ? "s" : ""})</span>}
      </div>

      <button
        className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        disabled={nights === 0}
        onClick={() => alert(`Reserved for ${nights} night(s), total $${total}`)}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
