import { MainRoutes } from "./routes/MainRoutes";

export default function App() {
  return (
    <div>
      <header>
        <h1 className="leading-tight text-5xl mt-0 mb-2 text-blue-600">Galeria de Fotos</h1>
      </header>
      <hr className="mb-5" />

      <main>
        <MainRoutes />
      </main>
    </div>
  );
}
