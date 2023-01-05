import { Button } from "@chakra-ui/react"
import toast from 'react-hot-toast'

import ThreadService from "../../services/ThreadService"
import { ThreadCreationData } from "../../services/ThreadService"
import { Category } from "./CategorySelector"
import { useAppSelector } from "../../app/hooks"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

type ThreadSubmitProps = {
  title: string,
  content: string,
  categories: Category,
}

const ThreadSubmit = ({ title, content, categories }: ThreadSubmitProps) => {
  const threadService = new ThreadService()
  const { user } = useAppSelector(state => state.userProfile)

  const recentQuery = useQuery("threads_recent")
  const navigate = useNavigate()

  const handleThreadSubmit = async () => {

    // title or content cannot be empty
    if (title.length === 0 ) {
      toast.error("Please enter a title!")
      return;
    }
    if(content.length === 0) {
      toast.error("Please enter your thread content!")
      return;
    }

    // categories cannot be empty
    const keys = Object.keys(categories)
    let categorySelected: boolean = false
    for (const key of keys) {
      categorySelected = categorySelected || categories[key][0]
    }
    if(!categorySelected) {
      toast.error("Please select a category!")
      return;
    }

    const categoryIds: number[] =  [];
    for(const key in categories) {
      const [bool, id]: [boolean, number] = categories[key];
      if (bool) categoryIds.push(id);
    }

    const threadCreationData: ThreadCreationData = {
      title: title,
      content: content,
      category_ids: categoryIds,
      sub: user?.sub,
    }

    const promise = threadService.createThread(threadCreationData)

    toast.promise(
      promise,
      {
        loading: 'Loading',
        success: 'Thread Created!',
        error: (err) => `${err.toString()}`,
      }
    )

    await recentQuery.refetch()
    navigate("/")
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

      onClick={handleThreadSubmit}
    >
      Post Thread</Button>
  )

}

export default ThreadSubmit
