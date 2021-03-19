import React from "react"

/* レンダープロップ */
/* CatはMouseの子、CatはMouseTrackerの孫コンポーネント */

class Cat extends React.Component {

    render() {
        var mouseState = this.props.mouseState;
        //違う場所をクリックするたびにxとyが更新され、画像が移動する
        return (
            <img src="/まんち.png" alt="まんち" style={{ position: "absolute", left: mouseState.x, top: mouseState.y }} />
        )
    }

}

class Mouse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {x: null, y: null};
        this.getMousePos = this.getMousePos.bind(this);
    }

    getMousePos(e) {
        this.setState({x: e.clientX, y: e.clientY});
    }

    render() {
        return (
            <div onClick={this.getMousePos} style={{width: "100%", height: "500px", background: "red"}}>
                <p style={{color: "white", fontWeight: "bold", textAlign: "center"}}>赤いエリアのどこかをクリックしてください</p>
                {/* 親コンポーネントであるMouseTrackerComponentから渡されたrenderFuncを実行 */}
                {/* renderFuncはCatコンポーネントを自身の子として作成し、自身のstateを渡す関数 */}
                {this.props.renderFunc(this.state)}
            </div>
        );
    }

}

class MouseTrackerComponent extends React.Component {

    render() {
        return (
            <Mouse renderFunc={(mouseState) => ( <Cat mouseState={mouseState} /> )} />
        )
    }

}

export default MouseTrackerComponent;

/* 親は子に孫をレンダリングする関数を渡し、子はその関数に自身のstateの値(クリック位置のx座標とy座標)を引数として実行することで孫をレンダリングする */