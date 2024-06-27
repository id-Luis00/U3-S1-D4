import { Button, Card } from "react-bootstrap"
import CommentArea from "./CommentArea";
import { Component } from "react";


class SingleBook extends Component {

    state = {
        selected: false
    }



    render() {
        return (
            <Card
                style={{ width: '18rem' }}
                onClick={() => this.setState({ selected: !this.state.selected })}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                        {'Prezzo: '} <strong>{this.props.book.price + '€'}</strong>
                    </Card.Text>
                    <Button variant="success">Add</Button>
                </Card.Body>
                {this.state.selected && <CommentArea book={this.props.book} />}
            </Card >
        )
    }




    /* const [selected, setSelected] = useState(false);

    const handleCardClick = () => {
        setSelected(!selected); // Toggle the selected state
    };

    return (
        <Card style={{ width: '18rem' }} onClick={handleCardClick}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    {'Prezzo: '} <strong>{book.price + '€'}</strong>
                </Card.Text>
                <Button variant="success">Add</Button>
            </Card.Body>
            {selected && <CommentArea book={book} />}
        </Card >

    ) */
}

export default SingleBook 