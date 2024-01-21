import Spam from "./Spam";

const Spamalot = () => {
  return (
    <>
      {Array(500)
        .fill()
        .map((x) => (
          <Spam />
        ))}
    </>
  );
};

export default Spamalot;
