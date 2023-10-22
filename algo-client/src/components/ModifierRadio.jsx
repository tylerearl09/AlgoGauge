

export default function ModifierRadio(props) {

    const onOptionChange = (e)=> {
      props.onChange(e.target.value.slice(2))
    }

  return (
    <div
      className={
        props.className +
        " mx-2 mb-2 py-3 radio-container container-bg rounded shadow form-check text-center"
      }
    >
      <label className="fs-6 ms-2 form-check-label">
        {props.labelName}
        <input
          className="form-check-input d-flex justify-self-center"
          type="radio"
          name={"modifier" + props.number}
          value = {[props.number, props.labelName]}
          onChange={onOptionChange}          
        />
      </label>
    </div>
  );
}
