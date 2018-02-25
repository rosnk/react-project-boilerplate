import keyMirror from '../../node_modules/fbjs/lib/keyMirror';

const actionTypes = keyMirror({
  FETCHING_HOTEL: null,
  FETCHING_HOTEL_SUCCESS: null,
  FETCHING_HOTEL_FAILURE: null,

  FETCHING_SEACH_RESULT_HOTEL: null,
  FETCHING_SEACH_RESULT_HOTEL_SUCCESS: null,
  FETCHING_SEACH_RESULT_HOTEL_FAILURE: null,
  FETCHING_SEACH_RESULT_BY_KEYWORD_HOTEL_SUCCESS: null,
  FETCHING_SEACH_RESULT_BY_KEYWORD_HOTEL_FAILURE: null,
  CLEAR_HOTELS_BEFORE_SEARCH: null,

  FETCHING_HOTEL_NEAR: null,
  FETCHING_HOTEL_NEAR_SUCCESS: null,
  FETCHING_HOTEL_NEAR_FAILURE: null,

  FETCHING_AMENITIES: null,
  FETCHING_AMENITIES_SUCCESS: null,
  FETCHING_AMENITIES_FAILURE: null,

  FETCHING_PREFERRED: null,
  FETCHING_PREFERRED_SUCCESS: null,
  FETCHING_PREFERRED_FAILURE: null,

  FETCHING_EXPLORE: null,
  FETCHING_EXPLORE_SUCCESS: null,
  FETCHING_EXPLORE_FAILURE: null,

  SET_HOTEL: null,

  SHOW_HOTEL_SEARCH: null,
  HIDE_HOTEL_SEARCH: null,

  SHOW_ZOOM_VIEW: null,
  HIDE_ZOOM_VIEW: null,

  SHOW_SOCIAL_VIEW: null,
  HIDE_SOCIAL_VIEW: null,

  SHOW_AMENITY_VIEW: null,
  HIDE_AMENITY_VIEW: null,

  SHOW_PREFERRED_VIEW: null,
  HIDE_PREFERRED_VIEW: null,

  SHOW_CONTROL_PANEL: null,
  HIDE_CONTROL_PANEL: null,

  SET_CURRENT_LOCATION: null
});

// const actionTypes = keyMirror({
//     FETCHING_HOTEL: 'FETCHING_HOTEL',
//     FETCHING_HOTEL_SUCCESS: 'FETCHING_HOTEL_SUCCESS',
//     FETCHING_HOTEL_FAILURE: 'FETCHING_HOTEL_FAILURE',

//     FETCHING_HOTEL_NEAR: 'FETCHING_HOTEL_NEAR',
//     FETCHING_HOTEL_NEAR_SUCCESS: 'FETCHING_HOTEL_NEAR_SUCCESS',
//     FETCHING_HOTEL_NEAR_FAILURE: 'FETCHING_HOTEL_NEAR_FAILURE',

//     FETCHING_AMENITIES: 'FETCHING_AMENITIES',
//     FETCHING_AMENITIES_SUCCESS: 'FETCHING_AMENITIES_SUCCESS',
//     FETCHING_AMENITIES_FAILURE: 'FETCHING_AMENITIES_FAILURE',

//     FETCHING_PREFERRED: 'FETCHING_PREFERRED',
//     FETCHING_PREFERRED_SUCCESS: 'FETCHING_PREFERRED_SUCCESS',
//     FETCHING_PREFERRED_FAILURE: 'FETCHING_PREFERRED_FAILURE',

//     SET_HOTEL: 'SET_HOTEL',

//     SHOW_HOTEL_SEARCH: 'SHOW_HOTEL_SEARCH',
//     HIDE_HOTEL_SEARCH: 'HIDE_HOTEL_SEARCH',

//     SHOW_ZOOM_VIEW: 'SHOW_ZOOM_VIEW',
//     HIDE_ZOOM_VIEW: 'HIDE_ZOOM_VIEW',

//     SHOW_SOCIAL_VIEW: 'SHOW_SOCIAL_VIEW',
//     HIDE_SOCIAL_VIEW: 'HIDE_SOCIAL_VIEW',

//     SHOW_AMENITY_VIEW: 'SHOW_AMENITY_VIEW',
//     HIDE_AMENITY_VIEW: 'HIDE_AMENITY_VIEW',

//     SHOW_PREFERRED_VIEW: 'SHOW_PREFERRED_VIEW',
//     HIDE_PREFERRED_VIEW: 'HIDE_PREFERRED_VIEW',

//     SHOW_CONTROL_PANEL: 'SHOW_CONTROL_PANEL',
//     HIDE_CONTROL_PANEL: 'HIDE_CONTROL_PANEL',

//     SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION'

// });

export default actionTypes;
