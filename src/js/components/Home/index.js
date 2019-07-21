import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Container} from './styled';
import Map from '../Map'
import RoutingMap from '../RoutingMap';
import SearchBox from '../SearchBox';
import {getInitialLocation, searchLocation, selectAddress} from '../../actions/mapActions';

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
    const {searchSuggestions, userLocation, searchLocation, selectAddress} = this.props;
    switch (this.state.page) {
      case 0: content = <Map {...userLocation} />
        break;
      case 1: content = <RoutingMap />
        break;
      default:
        break;
    }
    return (
      <Container>
        {content}
        <SearchBox selectAddress={selectAddress} searchSuggestions={searchSuggestions} searchLocation={searchLocation} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.userReducer,
  ...state.mapReducer
})

const mapDispatchToProps = {
  getInitialLocation,
  searchLocation,
  selectAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
