import { useState } from "react";

const useCounter = (baslangicDegeri) => {
  const [count, setCount] = useState(baslangicDegeri);

  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sifirla = () => {
    setCount(0);
  };

  return arttir, azalt, sifirla, count;
};

export default useCounter;
