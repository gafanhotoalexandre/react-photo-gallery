import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate(-1);
  }

  return (
    <nav>
      <button
        type="button"
        className="px-5 py-2 rounded border border-blue-400 hover:bg-blue-400 hover:text-white transition-all"
        onClick={handleBackButton}
      >Voltar</button>
    </nav>
  );
}
