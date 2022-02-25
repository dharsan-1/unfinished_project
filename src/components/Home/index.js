import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {cartContainer: []}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({cartContainer: updatedData})
  }

  render() {
    const {cartContainer} = this.state
    return (
      <div className="team_cart_con">
        {cartContainer.map(eachCart => (
          <TeamCard eachCardDetails={eachCart} key={eachCart.id} />
        ))}
      </div>
    )
  }
}
export default Home
