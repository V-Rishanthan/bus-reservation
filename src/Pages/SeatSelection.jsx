import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SeatSelection = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { from, to, date, passengers, bus } = state || {};

  // Initialize seats (A1-J4)
  const initialSeats = [];
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  rows.forEach((row) => {
    for (let i = 1; i <= 4; i++) {
      initialSeats.push({
        id: `${row}${i}`,
        isOccupied: Math.random() < 0.2, // 30% chance of being occupied
        isSelected: false,
      });
    }
  });

  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    const seatIndex = seats.findIndex((seat) => seat.id === seatId);

    const seat = seats[seatIndex];

    if (seat.isOccupied) return;

    // Toggle selection
    const newSelected = seat.isSelected
      ? selectedSeats.filter((id) => id !== seatId)
      : [...selectedSeats, seatId];

    // Don't allow selecting more seats than passengers
    if (newSelected.length > passengers) return;

    setSelectedSeats(newSelected);

    // Update seats state
    const newSeats = [...seats];
    newSeats[seatIndex] = {
      ...seat,
      isSelected: !seat.isSelected,
    };
    setSeats(newSeats);
  };

  const getSeatColor = (seat) => {
    if (seat.isOccupied) return "bg-[#d90429] text-white";
    if (seat.isSelected) return "bg-blue-500 text-white";
    return "bg-gray-200 hover:bg-gray-300";
  };

  const handleProceed = () => {
    navigate("/payment", {
      state: {
        from,
        to,
        date,
        passengers,
        selectedSeats,
        bus,
        totalPrice: selectedSeats.length * bus.price,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Seat Selection */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Select Your Seats</h1>

          {/* Seat Legend */}
          <div className="flex justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#880d1e] rounded"></div>
              <span>Occupied</span>
            </div>
          </div>

          {/* Driver Section */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gray-800 text-white px-6 py-2 rounded-t-lg">
              Driver
            </div>
          </div>

          {/* Seat Grid */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {seats.map((seat) => (
              <button
                key={seat.id}
                onClick={() => handleSeatClick(seat.id)}
                className={`w-12 h-12 rounded flex items-center justify-center font-medium ${getSeatColor(
                  seat
                )} ${
                  seat.isOccupied ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={seat.isOccupied}
              >
                {seat.id}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Booking Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
            <div className="space-y-4 mb-4">
              <div>
                <p className="text-gray-600">Route:</p>
                <p className="font-medium">
                  {from} → {to}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Date:</p>
                <p className="font-medium">
                  {new Date(date).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Passengers:</p>
                <p className="font-medium">{passengers}</p>
              </div>
              <div>
                <p className="text-gray-600">Selected Seats:</p>
                <p className="font-medium">
                  {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Bus Type:</p>
                <p className="font-medium">{bus?.busType}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Total:</p>
                <p className="text-xl font-bold">
                  ${(selectedSeats.length * bus?.price).toFixed(2)}
                </p>
              </div>
            </div>

            <button
              onClick={handleProceed}
              disabled={selectedSeats.length !== passengers}
              className={`w-full mt-6 py-3 rounded-md font-medium ${
                selectedSeats.length === passengers
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
