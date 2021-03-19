import React from "react"
import HocOrderComponent from "./HocOrder"

class AutoOkidoMakerComponent extends React.Component {

    render() {
        return (
            <div>
                <h1>ライバルの名前を決定</h1>
                <input type="button" value="自動設定を実行する" onClick={() => this.props.setName()} />
                <p>ふむ…… {this.props.name}と いうんだな！ </p>
            </div>
        )
    }

}

export default HocOrderComponent(AutoOkidoMakerComponent);