import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from './styled';
import Map from '../Map';
import RoutingMap from '../RoutingMap';
import SearchBox from '../SearchBox';
import TopSearchBar from '../TopSearchBar';
import TripOptions from '../TripOptions';
import RoutingMapNoIcons from '../RoutingMapNoIcons';
import {
  getInitialLocation, searchLocation, selectAddress,
  searchDestinationAddress, selectDestinationAddress
} from '../../actions/mapActions';

const MOCK_ROUTES = [{latitude: '33.97542', longitude: '-118.03407', type: 'train'}, {latitude: '33.8652', longitude: '-117.99804', type: 'uber'}, {latitude: '33.89157', longitude: '-118.00425', type: 'scooter'},];

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.selectDestinationAddress = this.selectDestinationAddress.bind(this);
    this.selectTripOptions = this.selectTripOptions.bind(this);
  }
  componentWillMount() {
    this.props.getInitialLocation();
  }
  selectDestinationAddress(address) {
    this.setState({page: 1});
    this.props.selectDestinationAddress(address);
  }
  selectTripOptions() {
    this.setState({page: 2});
  }
  render() {
    let content = <div />;
    const {
      searchSuggestions, userLocation, searchLocation,
      selectAddress, originAddress, searchDestinationAddress,
      destinationAddressSuggestions, destAddress
    } = this.props;
    switch (this.state.page) {
      case 0: {
        let {latitude, longitude} = originAddress || userLocation || {};
        content = <Map latitude={latitude} longitude={longitude} />;
      }
        break;
      case 1: content = <RoutingMapNoIcons center={{latitude: '33.8752', longitude: '-117.99904'}} routes={MOCK_ROUTES} />;
        break;
      case 2: content = <RoutingMap center={{latitude: '33.8752', longitude: '-117.99904'}} routes={MOCK_ROUTES} />;
        break;
      default:
        break;
    }
    return (
      <Container>
        {originAddress ? <TopSearchBar destAddress={destAddress} selectDestinationAddress={this.selectDestinationAddress} destinationAddressSuggestions={destinationAddressSuggestions} searchDestinationAddress={searchDestinationAddress} originAddress={originAddress} /> : null}
        {content}
        {originAddress && destAddress ? <TripOptions selectOption={this.selectTripOptions} destAddress={destAddress} originAddress={originAddress} /> : null}
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
  selectDestinationAddress,
  searchDestinationAddress
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
