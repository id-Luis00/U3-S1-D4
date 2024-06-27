import { Container, ListGroup } from "react-bootstrap"



const CommentsList = ({ comments, asin }) => (
    <Container fluid>

        <ListGroup>

            {comments.filter(comment => comment.elementId.includes(asin)).map((comment, index) => (

                <ListGroup.Item key={index}>{comment.comment}</ListGroup.Item>
            ))}


        </ListGroup>

    </Container>

)

export default CommentsList