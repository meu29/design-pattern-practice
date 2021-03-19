import React from "react"
import HocOrderComponent from "./HocOrder"

/* どちらのコンポーネントも、HocOrderComponentで作成したコンポーネントのコンストラクタとstate、setNameメソッドを使用している */
/* stateやsetNameメソッドの引数の値はコンポーネントごとに持つ */
class OkidoMakerComponent extends React.Component {

    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.props.setName(e.target.value)} />
                <p>ふむ…… {this.props.name}と いうんだな！ </p>
            </div>
        )
    }

}

class AutoOkidoMakerComponent extends React.Component {

    render() {
        return (
            <div>
                <input type="button" value="オート決定" onClick={() => this.props.setName()} />
                <p>ふむ…… {this.props.name}と いうんだな！ </p>
            </div>
        )
    }

}

/* 片方をexportするともう片方がexportできない(片方のdefaultをはずしてもダメ) */
export default HocOrderComponent(OkidoMakerComponent);
//export default HocOrderComponent(AutoOkidoMakerComponent);
