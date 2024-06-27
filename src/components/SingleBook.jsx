import { Button, Card } from "react-bootstrap"
import CommentArea from "./CommentArea";
import { useState } from "react";


const SingleBook = ({ book }) => {

    const [selected, setSelected] = useState(false);

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

    )
}

export default SingleBook 