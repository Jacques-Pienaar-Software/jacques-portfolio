import { useState } from "react";
import "./textArea.css";
import { ITextAreaProps } from "./types";

function TextArea({ label, placeholder }: ITextAreaProps) {
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
      <textarea
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

export default TextArea;
