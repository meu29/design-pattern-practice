import React from "react"
import HocOrderComponent from "./HocOrder"

class OkidoMakerComponent extends React.Component {

    render() {
        return (
            <div>
                <h1>主人公の名前を入力</h1>
                <input type="text" onChange={(e) => this.props.setName(e.target.value)} />
                <p>ふむ…… {this.props.name}と いうんだな！ </p>
            </div>
        )
    }

}

export default HocOrderComponent(OkidoMakerComponent);

