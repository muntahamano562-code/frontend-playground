import Modal from "./components/Modal/Modal";
import Tabs from "./components/Tabs/Tabs";
import Disclosure from "./components/Disclosure/Disclosure";

import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main style={{ padding: "40px", display: "grid", gap: "40px" }}>
      <h1>Accessibility Playground</h1>

      <section>
        <h2>Modal</h2>

        <button onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </section>

      <section>
        <h2>Tabs</h2>
        <Tabs />
      </section>

      <section>
        <h2>Disclosure</h2>
        <Disclosure />
      </section>
    </main>
  );
}