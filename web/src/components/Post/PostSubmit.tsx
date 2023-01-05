import { Button } from "@chakra-ui/react"
import toast from 'react-hot-toast'

import PostService, { PostCreationData } from "../../services/PostService"
import { useAppSelector } from "../../app/hooks"
import { useQuery } from "react-query"

interface IPostSubmit {
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>
  threadID: number,
}

const PostSubmit: React.FC<IPostSubmit> = ({ content, setContent, threadID }) => {
  const postService = new PostService()
  const { user } = useAppSelector(state => state.userProfile)

  const postQuery = useQuery(`posts_${threadID}`)

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

    await toast.promise(
      promise,
      {
        loading: 'Loading',
        success: 'Post Created!',
        error: (err) => `${err.toString()}`,
      }
    )

    // cleanup
    setContent("")
    await postQuery.refetch()
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
      Post Reply
    </Button>
  )

}

export default PostSubmit
