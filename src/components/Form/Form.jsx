import { Component } from "react";

///Всля логика и СТАЙТ формы выносится в отдельный компонент формы
///App ничего про эти методы знать не должен

export class Form extends Component {
    state = {
        name: '',
        tag: '',
        experience: 'junior',
        license: false
    };

    heandleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value
    })
    }

    heandleSumbit = event => {
    event.preventDefault();
    // console.log(this.state);
        this.props.onSubmitForm(this.state)
    
        this.resetForm();
    }

    heandleLicenseChange = event => {
        console.log(event.currentTarget.checked);

        this.setState({
            license: event.currentTarget.checked
        });
    }
    
    resetForm = () => {
        this.setState({
            name: '',
            tag: '',
        })
    }

    render() {
        const { name, tag, experience, license } = this.state;

        return (
            <form onSubmit={this.heandleSumbit} >
                <label>
                    Имя
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.heandleChange}
                    >
                    </input>
                </label>
                <label>
                    Прозвище
                    <input
                    type="text"
                    name="tag"
                    value={tag}
                    onChange={this.heandleChange}
                    >
                    </input>
                </label>

                <p>Ваш уровень:</p>
                <label>
                    <input 
                        type="radio" 
                        name="experience" 
                        value="junior"
                        checked={experience === 'junior'}
                        onChange={this.heandleChange}></input> Junior
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="experience" 
                        value="middle"
                        checked={experience === 'middle'}
                        onChange={this.heandleChange}></input> Middle
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="experience" 
                        value="senior"
                        checked={experience === 'senior'}
                        onChange={this.heandleChange}></input>Senior
                </label>

                <label>
                    <input
                    type="checkbox"
                    name="license"
                    checked={license}
                    onChange={this.heandleLicenseChange}></input>Согласен с уловиями соглашения
                </label>
                
                <button type="submit" disabled={!license}>Отправить форму</button>
        </form>
        )
    }
};