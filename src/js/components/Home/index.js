import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Container} from './styled';
import Map from '../Map'
import SearchBox from '../SearchBox';
import {getInitialLocation, searchLocation} from '../../actions/mapActions';

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
    const {searchSuggestions, userLocation, searchLocation} = this.props;
    switch (this.state.page) {
      case 0: content = <Map {...userLocation} />
        break;
      default:
        break;
    }
    return (
      <Container>
        {/* {content} */}
        <SearchBox searchSuggestions={searchSuggestions} searchLocation={searchLocation} />
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
  searchLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
