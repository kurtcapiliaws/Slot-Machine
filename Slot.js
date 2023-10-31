class Slot extends React.Component{

    render(){
        const result = (this.props.s1 === this.props.s2) && (this.props.s2 === this.props.s3);;
        return (
            <div className="slot-machine">
                <p>{this.props.s1}  {this.props.s2}  {this.props.s3}</p>
                <p>{result ? 'You win!' : 'You lose'}</p>
            </div>

        );
    }
}