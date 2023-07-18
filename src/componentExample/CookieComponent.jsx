import useCookie from "../customHooks/useCookie";

export default function CookieComponent(){
    const [value, update, remove] = useCookie("name", "John")

    return(
        <>
            <div>{value}</div>
            <button onClick={() => update("Sally")}>Change name to Sally</button>
            <button onClick={remove}>Delete Name</button>
        </>
    )
}