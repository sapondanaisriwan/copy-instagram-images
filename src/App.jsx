import { useEffect, useState } from "react";
import Main from "./components/section/Main";
import Header from "./components/section/Header";
import HorizontalLine from "./components/ui/HorizontalLine";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>
    <Header />
    <HorizontalLine fullLine={true} />
    <Main />
  </>
}

export default App;
