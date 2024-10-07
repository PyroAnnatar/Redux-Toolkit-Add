import CarForm from "./components/CarForm";
import CarList from "./components/CarList";

export default function App() {
  return (
    <div className="h-screen overflow-hidden p-10 bg-[#d1d1d1]">
      <CarForm />
      <div className="flex items-center mt-4 mb-2">
        <hr className="flex-grow border border-black/30 mt-2" />
        <h3 className="text-3xl my-2 font-medium text-center px-2">
          Arabalarım
        </h3>
        <hr className="flex-grow border border-black/30 mt-2" />
      </div>
      {/* <hr className="my-4" /> */}
      <CarList />
    </div>
  );
}
