import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  return (
    <div>Details</div>
  )
}

export default Details