import { Component } from "react"
import { Container } from "react-bootstrap"
import CommentsList from "./CommentsList"



class CommentArea extends Component {

    state = {
        comments: []
    }

    fetchComments = async () => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/",
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkOGJkMzNhMzhjYjAwMTVmNjNkOTQiLCJpYXQiOjE3MTk1MDM4MjgsImV4cCI6MTcyMDcxMzQyOH0.L69pS2SihKdzx0zKj0_e0Ww3h7jzV1XnOHrGGpam96M"
                    }
                })
            if (response.ok) {
                const data = await response.json()
                this.setState({ comments: data })
                console.log(data)
            } else {
                console.log('error while fetching')
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.fetchComments()

    }


    render() {
        return (


            <div>
                <h5>Commenti del libro {this.props.book.asin}</h5>
                <Container fluid>

                    <CommentsList asin={this.props.book.asin} comments={this.state.comments} />
                    {/* <AddComment /> */}
                </Container>
            </div>
        )
    }
}

export default CommentArea