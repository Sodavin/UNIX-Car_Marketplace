import React from "react";

const cars = [

];

export default function FeaturedCars() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Cars
          </h2>
          <p className="text-gray-500 mt-1">
            Hand-picked premium listings
          </p>
        </div>

        <button className="text-red-500 font-medium hover:underline">
          View all →
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="h-56 w-full object-cover"
              />

              {/* FEATURED BADGE */}
              <span className="absolute top-3 left-3 bg-indigo-700 text-white text-xs px-3 py-1 rounded-full">
                FEATURED
              </span>

              {/* ACTION ICONS */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
                <button className="bg-white p-2 rounded-full shadow">
                  🔗
                </button>
                <button className="bg-white p-2 rounded-full shadow">
                  ⚖️
                </button>
              </div>

              {/* STATS */}
              <div className="absolute bottom-3 left-3 flex gap-2 text-xs text-white">
                <span className="bg-black/60 px-2 py-1 rounded">
                  📷 3
                </span>
                <span className="bg-black/60 px-2 py-1 rounded">
                  👁 100+
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {car.name}
              </h3>

              <p className="text-xl font-bold text-indigo-700 mt-2">
                {car.price}
              </p>

              <p className="text-xs text-gray-500">
                Excl. Govt. Charges
              </p>

              {/* SPECS */}
              <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600">
                <span>🚗 {car.type}</span>
                <span>⛽ {car.fuel}</span>
                <span>⚙️ Automatic</span>
                <span>📍 {car.km}</span>
              </div>

              {/* SELLER */}
              <div className="mt-5 pt-4 border-t text-sm">
                <p className="font-medium text-indigo-900">
                  {car.seller}
                </p>
                <p className="text-gray-500">{car.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}