import React from "react"

/* 高階コンポーネント(コンポーネントを引数にとり新しいコンポーネントを返す関数コンポーネント) */
/* ここではOkidMakerComponentかAutoOkidMakerComponentを引数にしている */
var HocOrderComponent = (Component) => {

    class NewComponent extends React.Component {

        /* つのコンポーネントは、どちらもstateの内容が同じ(nameという値を持つ) */
        /* コンストラクタを共有(state.nameはそれぞれ個別に値を持つ) */
        constructor(props) {
            super(props);
            this.state = {name: ""};
            this.setName = this.setName.bind(this);
        }

        /* 後者のコンポーネントはボタン操作でe.target.valueがないので、デフォルト値を設定 */
        /* 両コンポーネントで同じメソッド(引数の値をstateのnameに設定するというロジック)を共有 */
        setName(name = "わしにしね") {
            this.setState({name: name});
        }

        render() {
            return <Component name={this.state.name} setName={this.setName} />
        }
            
    }

    return NewComponent;

}

export default HocOrderComponent;