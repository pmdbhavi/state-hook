import {
  ListItem,
  Avatar,
  NameAndCommentContainer,
  NameText,
  CommentText,
  HorizontalLine,
} from './styledComponents'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, text} = commentDetails

  return (
    <>
      <ListItem>
        {name && <Avatar>{name[0].toUpperCase()}</Avatar>}
        <NameAndCommentContainer>
          <NameText>{name}</NameText>
          <CommentText>{text}</CommentText>
        </NameAndCommentContainer>
      </ListItem>
      <HorizontalLine />
    </>
  )
}

export default CommentItem
