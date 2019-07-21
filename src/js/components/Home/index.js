import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Container, Header} from './styled';
import Map from '../Map'
import {getInitialLocation} from '../../actions/mapActions';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }
  }
  componentWillMount() {
    this.props.getInitialLocation();
  }
  render() {
    let content = <div />;
    switch (this.state.page) {
      case 0: content = <Map {...this.props.userLocation} />
    }
    return (
      <Container>
        {content}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.userReducer
})

const mapDispatchToProps = {
  getInitialLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
