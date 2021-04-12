export default function Input(props) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`form__input form__input_${props.inputType}`}
        name={props.name}
        description={props.description}
        minLength={props.min}
        maxLength={props.max}
        onChange={props.handleChange}
        value={props.value}
        autoComplete='off'
        required
      />
    </>
  );
}
