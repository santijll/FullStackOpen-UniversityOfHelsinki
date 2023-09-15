/* eslint-disable react/prop-types*/
function ErrorNotification({ message }) {
  const style = {
    width: "80%",
    margin: "15px auto",
    fontSize: "18px",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    color: "red",
    backgroundColor: "#D3D3D3",
    border: "3px solid red",
    borderRadius: "10px",
    padding: "5px",
  };
  if (message === null) return null;

  return <p style={style}>{message}</p>;
}

export default ErrorNotification;
