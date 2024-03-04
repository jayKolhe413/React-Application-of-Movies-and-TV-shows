import "./DropDown.css";

function DropDown({ title, options, func }) {
  const handleSelectChange = (e) => {
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
