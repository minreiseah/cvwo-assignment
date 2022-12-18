import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const CreateThreadButton: React.FC = () => {

  return (
    <Button
      border="1px"
      borderColor="black"
      boxShadow="4px 4px 0 #000"
      borderRadius="xl"
      bg="primary.2"
      color="black"
      fontFamily="Metropolis"
      letterSpacing="wide"
      as={Link}
      to="/post-thread"
    >New Thread</Button>
  )
}

export default CreateThreadButton
