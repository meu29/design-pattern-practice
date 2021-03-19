import React from "react"

var HocOrderComponent = (Component) => {

    class NewComponent extends React.Component {

        /* Maker.tsxの2つのコンポーネントは、どちらもstateの内容が同じ(nameという値を持つ) */
        /* そのため一箇所(このファイル)で管理 */
        constructor(props) {
            super(props);
            this.state = {name: ""};
            this.setName = this.setName.bind(this);
        }

        /* 2つ目のコンポーネントはボタン操作でe.target.valueがないので、デフォルト値を設定 */
        /* 両コンポーネントで同じメソッド(引数の値をnameに設定するというロジック)を共有 */
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