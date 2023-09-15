/* eslint-disable react/prop-types*/
function SuccessNotification({ message }) {
  const style = {
    width: "80%",
    margin: "15px auto",
    fontSize: "18px",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#089000",
    backgroundColor: "#90ee90 ",
    border: "3px solid #089000",
    borderRadius: "10px",
    padding: "5px",
  };
  if (message === null) return null;

  return <p style={style}>{message}</p>;
}

export default SuccessNotification;
