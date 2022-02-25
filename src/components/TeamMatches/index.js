import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  state = {TeamMatchesContainer: []}

  componentDidMount() {
    this.matchFullDetails()
  }

  matchFullDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const updatedData = data.
  }
}

export default TeamMatches
