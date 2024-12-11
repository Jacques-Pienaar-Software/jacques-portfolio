import { useState } from "react";
import "./textInput.css";
import { ITextInputProps } from "./types";

function TextInput({ label, placeholder }: ITextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-container">
      <label className={`input-label ${isFocused || value ? "focused" : ""}`}>
        {label}
      </label>
      <input
        type="text"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className="text-input"
        placeholder={isFocused || value ? "" : placeholder} // Hide the placeholder when focused
      />
    </div>
  );
}

export default TextInput;
