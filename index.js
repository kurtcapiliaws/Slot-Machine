class App extends React.Component {
    handleRefreshClick = () => {
        window.location.reload();
    }
    getRandomSymbol() {
        const symbols = ['🍒', '🍊', '🍇']; 
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    render() {
        const s1 = this.getRandomSymbol();
        const s2 = this.getRandomSymbol();
        const s3 = this.getRandomSymbol();

        return(
            <div>
                <Slot s1={this.getRandomSymbol()} s2={this.getRandomSymbol()} s3={this.getRandomSymbol()} />
                <Slot s1={this.getRandomSymbol()} s2={this.getRandomSymbol()} s3={this.getRandomSymbol()} />
                <Slot s1={this.getRandomSymbol()} s2={this.getRandomSymbol()} s3={this.getRandomSymbol()} />
                <button onClick={this.handleRefreshClick}>SPIN MACHINE</button>
            </div>
        ); 
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

