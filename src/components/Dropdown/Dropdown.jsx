import { Component } from "react";
import './Dropdown.css';

export class Dropdown extends Component {

    state = {
        visiable: false,
    }


    ///Toggle - переключатель....

    toggle = () => {
        this.setState(prevState => ({
            visiable: !prevState.visiable,
        }));
    };

    // show = () => {
    //     this.setState({
    //         visiable: true,
    //     });
    // };

    // hide = () => {
    //     this.setState({
    //         visiable: false,
    //     });
    // };

    render() {
        const { visiable } = this.state;

        return (
            <div className="Dropdown">
                {/* <button type="button" className="Dropdown__toggle" onClick={this.show}>
                    Показать
                </button>
                <button type="button" className="Dropdown__toggle" onClick={this.hide}>
                    Скрыть
                </button> */}
                <button
                    type="button"
                    className="Dropdown__toggle"
                    onClick={this.toggle}>
                    {visiable ? 'Скрыть' : 'Показать'}
                </button>

                {visiable && (<div className="Dropdown__menu">Выпадающее меню</div>)}
            </div>
        );
    }
}