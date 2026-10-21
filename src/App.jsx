import { useState } from "react";

// Adattömbök valós árakkal és relatív képeléréssel
const processors = [
  { name: "AMD Ryzen 5 7600", price: 63990, img: "./src/assets/cpu.jpg" },
  { name: "Intel Core i5-14600K", price: 115000, img: "./src/assets/cpu.jpg" },
  { name: "AMD Ryzen 7 7800X3D", price: 145000, img: "./src/assets/cpu.jpg" },
  { name: "Intel Core i7-14700K", price: 155000, img: "./src/assets/cpu.jpg" },
];

const gpus = [
  { name: "ASUS RTX 4060 Dual 8GB", price: 128000, img: "./src/assets/gpu.webp" },
  { name: "GIGABYTE RTX 4070 SUPER 12GB", price: 265000, img: "./src/assets/gpu.webp" },
  { name: "Sapphire Pulse RX 7600 8GB", price: 110000, img: "./src/assets/gpu.webp" },
];

const memories = [
  { name: "Kingston FURY 16GB DDR5", price: 23000, img: "./src/assets/ram.jpg" },
  { name: "Kingston FURY 32GB DDR5", price: 42000, img: "./src/assets/ram.jpg" },
  { name: "Corsair Vengeance 64GB DDR5", price: 85000, img: "./src/assets/ram.jpg" },
];

const storages = [
  { name: "Kingston NV2 1TB SSD", price: 24000, img: "./src/assets/ssd.png" },
  { name: "Samsung 990 PRO 1TB SSD", price: 38000, img: "./src/assets/ssd.png" },
  { name: "Samsung 990 PRO 2TB SSD", price: 65000, img: "./src/assets/ssd.png" },
];

const cases = [
  { name: "Zalman i3 NEO", price: 18000, img: "./src/assets/case.jpg" },
  { name: "Corsair 4000D", price: 36000, img: "./src/assets/case.jpg" },
];

const psus = [
  { name: "EVGA 600W White", price: 19000, img: "./src/assets/psu.png" },
  { name: "Corsair RM750x 750W", price: 48000, img: "./src/assets/psu.png" },
];

const mice = [
  { name: "Logitech G102", price: 9500, img: "./src/assets/eger.jpg" },
  { name: "Razer DeathAdder", price: 11000, img: "./src/assets/eger.jpg" },
];

const keyboards = [
  { name: "Genius Smart KB-100", price: 4500, img: "./src/assets/bill.webp" },
  { name: "Razer Cynosa V2", price: 22000, img: "./src/assets/bill.webp" },
];

// Pontosan a te mintád alapján felépített választó komponens képpel bővítve
const ComponentSelector = ({ name, options, selectedOption, onSelect }) => {
  return (
    <div>
      <h3>{name}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          style={{
            backgroundColor: selectedOption?.name === option.name ? "red" : "grey",
            margin: "5px",
            padding: "10px",
            borderRadius: "3px",
            color: "white",
            border: "none",
            cursor: "pointer",
            textAlign: "center"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Képek lekorlátozása maximum 150x150 alá */}
            <img 
              src={option.img} 
              alt={option.name} 
              style={{ maxWidth: "120px", maxHeight: "120px", objectFit: "contain", marginBottom: "5px" }} 
            />
            <span>{option.name} - {option.price} HUF</span>
          </div>
        </button>
      ))}
    </div>
  );
};

// A fő App komponens
export const App = () => {
  const [processor, setProcessor] = useState(null);
  const [gpu, setGpu] = useState(null);
  const [memory, setMemory] = useState(null);
  const [storage, setStorage] = useState(null);
  const [pcCase, setPcCase] = useState(null);
  const [psu, setPsu] = useState(null);
  const [mouse, setMouse] = useState(null);
  const [keyboard, setKeyboard] = useState(null);

  const totalPrice = 
    (processor?.price || 0) + 
    (gpu?.price || 0) +
    (memory?.price || 0) + 
    (storage?.price || 0) + 
    (pcCase?.price || 0) + 
    (psu?.price || 0) + 
    (mouse?.price || 0) + 
    (keyboard?.price || 0);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>PC Összeállító App</h1>

      <ComponentSelector
        name="Processzorok"
        options={processors}
        selectedOption={processor}
        onSelect={setProcessor}
      />

      <ComponentSelector
        name="Videokártyák"
        options={gpus}
        selectedOption={gpu}
        onSelect={setGpu}
      />

      <ComponentSelector
        name="Memóriák"
        options={memories}
        selectedOption={memory}
        onSelect={setMemory}
      />

      <ComponentSelector
        name="Tárhely"
        options={storages}
        selectedOption={storage}
        onSelect={setStorage}
      />

      <ComponentSelector
        name="Gépházak"
        options={cases}
        selectedOption={pcCase}
        onSelect={setPcCase}
      />

      <ComponentSelector
        name="Tápegységek"
        options={psus}
        selectedOption={psu}
        onSelect={setPsu}
      />

      <ComponentSelector
        name="Egerek"
        options={mice}
        selectedOption={mouse}
        onSelect={setMouse}
      />

      <ComponentSelector
        name="Billentyűzetek"
        options={keyboards}
        selectedOption={keyboard}
        onSelect={setKeyboard}
      />

      <h2>Teljes ár: {totalPrice} HUF</h2>
    </div>
  );
};

export default App;
