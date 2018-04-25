import types from '../constants/actionTypes';

const initialState = {
  hotel: {},
  hotels: [],
  amenities: [],
  preferred: [],
  exploreCategories: [],
  exploreAdvertisements: [],
  currentLocation: {},
  isFetching: false,
  error: false,
  isFetchingAmenities: false,
  errorAmenities: false,
  isFetchingPreferred: false,
  isFetchingExplore: false,
  errorPreferred: false,
  errorExplore: false,
  isFetchingHotels: false,
  errorHotels: false,
  showLoader: true
};

function hotelReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.data
      };
    case types.FETCHING_HOTEL:
      return {
        ...state,
        isFetching: true,
        hotel: {}
      };
    case types.FETCHING_HOTEL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        showLoader: false,
        hotel: action.data
      };
    case types.FETCHING_HOTEL_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };

    case types.FETCHING_SEACH_RESULT_HOTEL:
      return {
        ...state,
        isFetching: true,
        hotel: {}
      };
    case types.FETCHING_SEACH_RESULT_HOTEL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hotels: action.data
      };
    case types.FETCHING_SEACH_RESULT_HOTEL_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };

    case types.FETCHING_SEACH_RESULT_BY_KEYWORD_HOTEL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hotels: action.data
      };
    case types.FETCHING_SEACH_RESULT_BY_KEYWORD_HOTEL_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case types.CLEAR_HOTELS_BEFORE_SEARCH:
      return {
        ...state,
        hotels: []
      };
    case types.SET_HOTEL:
      return {
        ...state,
        isFetching: false,
        hotel: action.data
      };
    case types.FETCHING_AMENITIES:
      return {
        ...state,
        showLoader: true,
        isFetchingAmenities: true,
        amenities: []
      };
    case types.FETCHING_AMENITIES_SUCCESS:
      return {
        ...state,
        showLoader: false,
        isFetchingAmenities: false,
        amenities: action.data
      };
    case types.FETCHING_AMENITIES_FAILURE:
      return {
        ...state,
        isFetchingAmenities: false,
        error: true
      };

    case types.FETCHING_PREFERRED:
      return {
        ...state,
        showLoader: true,
        isFetchingExplore: true,
        preferred: []
      };
    case types.FETCHING_PREFERRED_SUCCESS:
      return {
        ...state,
        showLoader: false,
        isFetchingExplore: false,
        preferred: action.data
      };
    case types.FETCHING_PREFERRED_FAILURE:
      return {
        ...state,
        isFetchingExplore: false,
        errorExplore: true
      };

    case types.FETCHING_EXPLORE:
      return {
        ...state,
        showLoader: true,
        isFetchingPreferred: true,
        explore: []
      };
    case types.FETCHING_EXPLORE_SUCCESS:
      return {
        ...state,
        showLoader: false,
        isFetchingPreferred: false,
        exploreCategories: action.data.categories,
        exploreAdvertisements: action.data.advertisements
      };
    case types.FETCHING_EXPLORE_FAILURE:
      return {
        ...state,
        showLoader: false,
        isFetchingPreferred: false,
        errorPreferred: true
      };

    default:
      return state;
  }
}

export default hotelReducer;
