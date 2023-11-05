import useCounter from "@/hooks/useCounter";

export default function Home() {
  const { arttir, azalt, sifirla, count } = useCounter(0);

  return (
    <>
      <div className="flex flex-col bg-black items-center  h-screen w-screen justify-center">
        <div className="flex gap-10 py-10 px-52 bg-gray-700 border rounded m-10 justify-center items-center">
          <button
            className="bg-orange-400 px-5 py-2 rounded text-xl font-bold"
            onClick={azalt}
          >
            -
          </button>

          <span className="bg-gray-900 text-white text-2xl p-8  rounded">
            {count}
          </span>

          <button
            className="bg-orange-400 px-5 py-2 rounded text-xl font-bold"
            onClick={arttir}
          >
            +
          </button>
        </div>
        <button
          className="bg-orange-400 text-black font-bold p-5 rounded text-xl fw-bold"
          onClick={sifirla}
        >
          Sıfırla
        </button>
      </div>
    </>
  );
}
