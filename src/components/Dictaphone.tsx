import useCastumRecognizer from "../hooks/useCastumRecognizer";
import style from "./style.module.css";

const Dictaphone = () => {
  const { start, stop, status, text } = useCastumRecognizer();

  return (
    <div className={style.box}>
      <div>{status ? "Идёт запись..." : "Запись окончена"}</div>
      <button className={style["btn__start"]} onClick={start} disabled={status}>
        Start
      </button>
      <button className={style["btn__stop"]} onClick={stop} disabled={!status}>
        Stop
      </button>
      {text && <p>Вы сказали: {text}</p>}
    </div>
  );
};
export default Dictaphone;
