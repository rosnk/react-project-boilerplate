// import axios from 'axios';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import types from '../constants/actionTypes';
import hotelapi from '../api/hotelApi';

export function setCurrentLocation(data) {
  return {
    type: types.SET_CURRENT_LOCATION,
    data
  };
}

export function fetchHotelFromAPI(location) {
  return dispatch => {
    dispatch({ type: types.FETCHING_HOTEL });

    function success(data) {
      dispatch({ type: types.FETCHING_HOTEL_SUCCESS, data });
    }

    function failure() {
      dispatch({ type: types.FETCHING_HOTEL_FAILURE });
    }

    hotelapi.fetchHotelFromAPI(location, success, failure);
  };
}

export function clearHotelsBeforeSearch() {
  return dispatch => {
    dispatch({ type: types.CLEAR_HOTELS_BEFORE_SEARCH });
  };
}

/* search page */

export function searchHotelsFromAPI(location) {
  return dispatch => {
    dispatch({ type: types.FETCHING_SEACH_RESULT_HOTEL });

    function success(data) {
      dispatch({ type: types.FETCHING_SEACH_RESULT_HOTEL_SUCCESS, data });
    }

    function failure() {
      dispatch({ type: types.FETCHING_SEACH_RESULT_HOTEL_FAILURE });
    }

    hotelapi.searchHotelsFromAPI(location, success, failure);
  };
}

export function searchHotelsFromKeyword(address) {
  return dispatch => {
    function success(data) {
      if (data.length <= 0) {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            const location = {
              latitude: latLng.lat,
              longitude: latLng.lng
            };
            dispatch(setCurrentLocation(location));
            dispatch(searchHotelsFromAPI(location));
          })

          .catch(error => console.error('Error', error));
      } else {
        dispatch({ type: types.FETCHING_SEACH_RESULT_BY_KEYWORD_HOTEL_SUCCESS, data });
      }
    }

    function failure() {
      dispatch({ type: types.FETCHING_SEACH_RESULT_BY_KEYWORD_HOTEL_FAILURE });
    }

    hotelapi.searchHotelsFromKeyword(address, success, failure);
  };
}

export function setHotel(data) {
  return {
    type: types.SET_HOTEL,
    data
  };
}

export function fetchAmenitiesFromAPI(hotel) {
  return dispatch => {
    dispatch({ type: types.FETCHING_AMENITIES });
    function success(data) {
      dispatch({ type: types.FETCHING_AMENITIES_SUCCESS, data });
    }

    function failure() {
      dispatch({ type: types.FETCHING_AMENITIES_FAILURE });
    }

    hotelapi.fetchAmenitiesFromAPI(hotel, success, failure);
  };
}

export function fetchPreferedFromAPI(hotel) {
  return dispatch => {
    dispatch({ type: types.FETCHING_PREFERRED });
    function success(data) {
      dispatch({ type: types.FETCHING_PREFERRED_SUCCESS, data });
    }

    function failure() {
      dispatch({ type: types.FETCHING_PREFERRED_FAILURE });
    }

    hotelapi.fetchPreferedFromAPI(hotel, success, failure);
  };
}

export function fetchExploreAdsFromAPI(hotel, location) {
  return dispatch => {
    dispatch({ type: types.FETCHING_EXPLORE });
    function success(data) {
      dispatch({ type: types.FETCHING_EXPLORE_SUCCESS, data });
    }

    function failure() {
      dispatch({ type: types.FETCHING_EXPLORE_FAILURE });
    }

    hotelapi.fetchExploreAdsFromAPI(hotel, location, success, failure);
  };
}

// export function fetchHotelFromAPI(location) {
//     return dispatch => {
//         dispatch(getHotel());
//         axios
//             .get('https://staycompass.com/near?lat=' + location.coords.lat + '&lng=' + location.coords.longitude)
//             .then(response => {
//                 dispatch(getHotelSuccess(response.data));
//             })
//             .catch(function (error) {
//                 dispatch(getHotelFailure(error));
//             });
//     };
// }

// function getHotel() {
//     return {
//         type: FETCHING_HOTEL
//     };
// }

// function getHotelSuccess(data) {
//     return {
//         type: FETCHING_HOTEL_SUCCESS,
//         data
//     };
// }

// function getHotelFailure() {
//     return {
//         type: FETCHING_HOTEL_FAILURE
//     };
// }
