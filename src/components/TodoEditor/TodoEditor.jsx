import { Component } from "react";


export class TodoEditor extends Component {
    state = {
        message: ''
    }

    heandleChange = event => {

    }

    render() {
        const { message } = this.state;
        return (
            <form>
                <textarea value={message} onChange={this.heandleChange}></textarea>
                <button type="button">Сохранить</button>
            </form>
        );
    }
}