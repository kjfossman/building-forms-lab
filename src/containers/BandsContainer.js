import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput.js'
import Bands from '../components/Bands.js'
class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Bands key={id} name={band} />)

  render() {
   
    return(
      <div>
        
        < BandInput addBand={this.props.addBand}/>
        < Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
 
  return {
    bands: state.bands 
  }
}



const mapDispatchToProps = (dispatch) => ({
  addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
