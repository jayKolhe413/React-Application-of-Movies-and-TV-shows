import "./DropDown.css";

// DropDown component
function DropDown({ title, options, func }) {
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    func(e.target.value);
  };

  return (
    <div className="pl-7 select">
      <select
        defaultValue="0"
        onChange={handleSelectChange}
        className="text-zinc-400"
        name="format"
        id="format"
      >
        <option value="0">{title}</option>
        {options.map((e, i) => (
          <option key={i} value={e}>
            {e.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
