export function Message({ message }) {
  return (
    <div className="alert">
      <p>Ocorreu um erro ao carregar {message.object}</p>
      <p className="alert__errorType">Erro: {message.type}</p>
    </div>
  );
}
