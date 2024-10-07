import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../features/cars/carsSlice";

function CarList() {
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel flex justify-between">
        <p className="text-lg">
          {car.name} - ${car.value}
        </p>
        <button
          className="py-1 px-3 rounded text-white bg-rose-500 hover:bg-rose-500/80"
          onClick={() => dispatch(removeCar(car.id))}
        >
          Sil
        </button>
      </div>
    );
  });

  return (
    <div className="border border-gray-300 w-full p-4 shadow-md flex flex-col gap-4 bg-white rounded-lg">
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className="no-cars text-center">Başlamak için araba ekleyin</div>
      )}
    </div>
  );
}

export default CarList;
