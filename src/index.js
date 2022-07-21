import { useState } from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import App from "./App"

function Overlay() {
    const [ready, set] = useState(false)
    return (
        <>
            <App />
            <div className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
                <div className="stack">
                    <button onClick={() => set(true)}>進入MetsStar</button>
                </div>
            </div>
        </>
    )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))
