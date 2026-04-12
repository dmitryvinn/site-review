import { I18nProvider } from "@/lib/i18n";
import Home from "./pages/Home";

function App() {
  return (
    <I18nProvider>
      <Home />
    </I18nProvider>
  );
}

export default App;
