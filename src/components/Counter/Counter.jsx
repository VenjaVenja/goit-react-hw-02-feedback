import { Component } from "react";
import { Controls } from "./Controls";
import { Value } from "./Value";
import './Counter.css';

export class Counter extends Component {
    static defaultProps = {
        initialValue: 0,
    };

    /// казание типов Пропсов.....

    // static propTypes = {
    //     ////
    // };
   
    state = {
        value: this.props.initialValue,
    };

/// Перезапись Стайта.....
    
    // heandleIncrement = () => {
    //     this.setState({
    //         value: 14,
    //     })
    // };

/// Изменения Стайта от предыдущего значения через функцию........

    heandleIncrement = () => {
        this.setState(prevState => ({
         value: prevState.value + 1,
        }));
    };

    heandleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }))
    };

    render() {
        const { value } = this.state;
        
        return (
            <div className="Counter">
                <Value value={value}/>
            
                <Controls
                    onIncrement={this.heandleIncrement}
                    onDecrement={this.heandleDecrement} />
                
            </div>
        );
    }
}




    // heandleIncrement = (event) => {
    //     console.log('Кликнул в увеличить')
    //     // console.log(event.currentTarget)
    //     // console.log(event.type)

    //         //// если мы хотим использованть значение (event.currentTarget(например) 
    //         // - в асинхронном коде нужно записать значение в переменную)
        
    //     const { target } = event;

    //     setTimeout(() => {
    //         console.log(target)
    //     },1000)
    // }

    // heandleDecrement() {
    //     console.log('Кликнул в уменьшить')
    // }