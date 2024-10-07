import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../features/cars/carsSlice";

function CarForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Yapılacaklar: Arabayı store'a kaydet

    if (name && value) {
      dispatch(addCar({ name, value }));
      setName("");
      setValue("");
    }
  };

  return (
    <div className="border border-gray-300 w-full p-4 shadow-md bg-white rounded-lg">
      <h4 className="subtitle text-3xl mb-4 text-center md:text-start ">
        Araba Ekle
      </h4>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-between items-center"
      >
        <div className="flex flex-col md:flex-row gap-2 justify-center mb-4">
          <div className="field flex">
            <label className="label font-semibold mr-2 w-full md:w-fit">
              Marka
            </label>
            <input
              className="input border border-gray-400 rounded-md py-1 px-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field flex">
            <label className="label font-semibold mr-2 w-full md:w-fit">
              Fiyat
            </label>
            <input
              className="input border border-gray-400 rounded-md py-1 px-2 "
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button className="py-1 px-3 rounded text-white bg-blue-600 hover:bg-blue-500/80">
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
