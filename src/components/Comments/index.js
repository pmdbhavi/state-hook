import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [commentList, setCommentList] = useState([])

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeText = event => {
    setText(event.target.value)
  }

  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      text,
    }
    setCommentList(prevComment => [...prevComment, newComment])
    setName('')
    setText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={text}
          onChange={onChangeText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(comment => (
          <CommentItem key={comment.id} commentDetails={comment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}
export default Comments
