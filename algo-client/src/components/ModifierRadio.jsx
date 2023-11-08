export default function ModifierRadio(props) {
  const onOptionChange = (e) => {
    props.onChange(e.target.value.slice(2));
  };

  return (
    <div className={props.className + " my-2"}>
      <input
        className="btn-check"
        type="radio"
        name={"modifier" + props.number}
        value={[props.number, props.labelName]}
        onChange={onOptionChange}
        autoComplete="off"
        id={props.labelName + props.number}
      />
      <label
        className="btn container container-bg shadow-lg rounded"
        htmlFor={props.labelName + props.number}
      >
        {props.labelName}
      </label>
    </div>
  );
}
