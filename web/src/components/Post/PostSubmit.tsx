import { Button } from "@chakra-ui/react"
import toast from 'react-hot-toast'

import PostService, { PostCreationData } from "../../services/PostService"
import { useAppSelector } from "../../app/hooks"

interface IPostSubmit {
  content: string,
  threadID: number,
}

const PostSubmit: React.FC<IPostSubmit> = ({ content, threadID }) => {
  const postService = new PostService()
  const { user } = useAppSelector(state => state.userProfile)

  const handlePostSubmit = async () => {

    // content cannot be empty
    if(content.length === 0) {
      toast.error("Please enter your post content!")
      return;
    }

    if(user === undefined || user.sub === undefined) {
      toast.error("Please log in!")
      return;
    }

    const postCreationData: PostCreationData = {
      content: content,
      thread_id: threadID,
      sub: user.sub,
    }

    const promise = postService.createPost(postCreationData)

    toast.promise(
      promise,
      {
        loading: 'Loading',
        success: 'Post Created!',
        error: (err) => `${err.toString()}`,
      }
    )
  }

  return (
    <Button
      border="1px"
      borderColor="black"
      boxShadow="4px 4px 0 #000"
      borderRadius="xl"
      bg="primary.2"
      color="black"
      fontFamily="Metropolis"
      letterSpacing="wider"
      type="submit"
      aria-required

      onClick={handlePostSubmit}
    >
      Post Reply</Button>
  )

}

export default PostSubmit
