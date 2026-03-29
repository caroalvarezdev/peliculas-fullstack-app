import Media from "./pages/Media";
import Tipo from "./pages/Tipo";
import Productora from "./pages/Productora";
import Generos from "./pages/Generos";
import Director from "./pages/Director";

function App() {
  return (
    <div>
      <Generos />
      <Director />
      <Productora />
      <Tipo />
      <Media />
    </div>
  );
}

export default App;