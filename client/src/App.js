import Router from "./routes";
import ThemeProvider from "./theme";
import ThemeSettings from "./components";

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        <Router />
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
