import { Component } from 'react';
import './ColorPicker.css';

export class ColorPicker extends Component {
    state = {
        activeOptionInd: 3,
    };

    makeOptionsClassName = index => {
        const optionClasses = ['ColorPicker__option'];

        if (index === this.state.activeOptionInd) {
            optionClasses.push('ColorPicker__option--active');
        }
        return optionClasses.join(' ');
    };

    setActivIdx = index => {
        this.setState({
            activeOptionInd: index,
        })
    };

    render() {
        const { activeOptionInd } = this.state;
        const { options } = this.props;
        const {label} = options[activeOptionInd];

        console.log(label)

        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Выбран цвет: {label}</p>
                <div>
                    {options.map(({ label, color }, index) => (
                        <button
                            key={label}
                            className={this.makeOptionsClassName(index)}
                            style={{ backgroundColor: color }}
                            type="button"
                            onClick={() => this.setActivIdx(index)}
                        ></button>
                    )
                    )}
                </div>
            </div>
        );
    }
};
