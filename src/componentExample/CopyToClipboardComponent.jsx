import { useState } from "react";
import useCopyToClipboard from "../customHooks/useCopyToClipboard";

export default function CopyToClipboardComponent(){
    const [copyToClipboard, {success}] = useCopyToClipboard()
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(
        <>
            <button onClick={() => copyToClipboard(value)}>
                {success ? "Copied" : "Copy Text"}
            </button>
            <input type = "text" value={value} onChange={handleChange}/>
        </>
    )
}