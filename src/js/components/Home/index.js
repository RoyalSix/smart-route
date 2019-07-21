import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from './styled';
import Map from '../Map';
import RoutingMap from '../RoutingMap';
import SearchBox from '../SearchBox';
import TopSearchBar from '../TopSearchBar';
import {getInitialLocation, searchLocation, selectAddress, searchDestinationAddress} from '../../actions/mapActions';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }
  componentWillMount() {
    this.props.getInitialLocation();
  }
  render() {
    let content = <div />;
    const {
      searchSuggestions, userLocation, searchLocation,
      selectAddress, originAddress, searchDestinationAddress,
      destinationAddressSuggestions
    } = this.props;
    switch (this.state.page) {
      case 0: content = <Map {...userLocation} />;
        break;
      case 1: content = <RoutingMap />;
        break;
      default:
        break;
    }
    return (
      <Container>
        {originAddress ? <TopSearchBar destinationAddressSuggestions={destinationAddressSuggestions} searchDestinationAddress={searchDestinationAddress} originAddress={originAddress} /> : null}
        {content}
        {!originAddress ? <SearchBox selectAddress={selectAddress} searchSuggestions={searchSuggestions} searchLocation={searchLocation} /> : null}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.userReducer,
  ...state.mapReducer
});

const mapDispatchToProps = {
  getInitialLocation,
  searchLocation,
  selectAddress,
  searchDestinationAddress
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
