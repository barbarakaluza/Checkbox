class App extends React.Component {
    state = {
        avaliableProducts: 7,
        shoppingCart: 10,
    }

    handleMinusClick = () => {
            this.setState({
                shoppingCart: this.state.shoppingCart - 1
            })
    }

    handlePlusClick = () => {
            this.setState({
                shoppingCart: this.state.shoppingCart + 1
            })
    }

    handleBuy = () => {
        this.setState({
            avaliableProducts: this.state.avaliableProducts - this.state.shoppingCart,
            shoppingCart: 0
        })
    }


    render() {
        const { shoppingCart, avaliableProducts } = this.state; 
        const style = shoppingCart === 0 ? {opacity: 0.3} : {};
        return (
            <>
            <button disabled={shoppingCart ? false : true} onClick={this.handleMinusClick}>-</button>
            <span className="count" style={style}>{shoppingCart}</span>
            <button disabled={shoppingCart === avaliableProducts ? true : false }onClick={this.handlePlusClick}>+</button>
            {shoppingCart > 0 ? <button onClick={this.handleBuy}>Kup</button> : null}
            </>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));