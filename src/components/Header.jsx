const Header = (props) => {
  return (
    <>
      <div>Header</div>
      <p>Estas en la pagina {props.titulo}</p>
      <p>{props.tema}</p>
      <p>Tu fruta favorita es: {props.fruta}</p>
      <div>{props.subtitulo}</div>
    </>
  );
};

export default Header;
