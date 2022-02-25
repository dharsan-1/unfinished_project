import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachCardDetails} = props
  const {name, teamImageUrl, id} = eachCardDetails

  return (
    <Link className="ipl-logo-team-con" to={`/teamsCard/${id}`}>
      <img src={teamImageUrl} alt={name} className="team-logo" />
      <h1 className="team-name">{name}</h1>
    </Link>
  )
}
export default TeamCard
