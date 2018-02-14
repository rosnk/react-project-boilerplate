import axios from 'axios';

const api = {
  fetchHotelFromAPI: function fetchHotelFromAPI(location, success, failure) {
    /* remove this code once complete, this code is used to mimic api call */
    // const response = {
    //   id: '593621c4ef39eb000a756914',
    //   name: 'The Ambassador Inn &amp; Suites - South Yarmouth, MA',
    //   address: '1314 Route 28, South Yarmouth, MA, United States',
    //   facebook: 'https://www.facebook.com/AmbassadorCapeCod/',
    //   twitter: '',
    //   phone: '(508) 394-4000',
    //   lat: '41.66710630000001',
    //   lng: '-70.18737599999997',
    //   logo_url:
    //     'https://staycompass.com/uploads/593621c4ef39eb000a756914/logo/593621c4ef39eb000a756914/thumb_16681622_1218352084867896_8762765847564716287_n.png',
    //   user_id: '59360faaef39eb000a756909',
    //   logo_small_url:
    //     'https://staycompass.com/uploads/593621c4ef39eb000a756914/logo/593621c4ef39eb000a756914/small_16681622_1218352084867896_8762765847564716287_n.png',
    //   reservation_url: 'https://reservation.asiwebres.com/v2/RoomAvailability.aspx?id=4bdb7f95cdbf472dae442cfbbc8a4bfa',
    //   market_code: '13521',
    //   estream: false,
    //   sliders: [
    //     {
    //       id: '59370c72ef39eb000a756918',
    //       image: 'https://staycompass.com/uploads/593621c4ef39eb000a756914/slider/image/AmbassadorExterior1.jpg'
    //     },
    //     {
    //       id: '59370c8aef39eb000a756919',
    //       image: 'https://staycompass.com/uploads/593621c4ef39eb000a756914/slider/image/AmbassadorPool3.jpg'
    //     }
    //   ]
    // };
    // success(response);
    // failure(response);
    /* remove this here */

    // debugger // eslint-disable-line
    axios
      .get(`https://staycompass.com/near?lat=${location.latitude}&lng= ${location.longitude}`)
      .then(response => {
        success(response.data);
      })
      .catch(error => {
        failure(error);
      });
  },

  searchHotelsFromAPI: function searchHotelsFromAPI(location, success, failure) {
    // debugger // eslint-disable-line

    axios
      .get(`https://staycompass.com/hotels?lat= ${location.latitude}&lng=${location.longitude}`)
      .then(response => {
        success(response.data);
      })
      .catch(error => {
        failure(error);
      });
  },
  searchHotelsFromKeyword: function searchHotelsFromKeyword(address, success, failure) {
    // debugger // eslint-disable-line

    axios
      .get(`https://staycompass.com/search?keywords=${address}`)
      .then(response => {
        success(response.data);
      })
      .catch(error => {
        failure(error);
      });
  },
  fetchAmenitiesFromAPI: function fetchAmenitiesFromAPI(hotel, success, failure) {
    // debugger // eslint-disable-line

    axios
      .get(`https://staycompass.com/get_amenities?hotel_id=${hotel.id}`)
      .then(response => {
        success(response.data);
      })
      .catch(error => {
        failure(error);
      });
  },
  fetchPreferedFromAPI: function fetchPreferedFromAPI(hotel, success, failure) {
    // debugger // eslint-disable-line

    axios
      .get(
        `https://adv.staycompass.com/preferred?lat=${hotel.lat}&lng=${hotel.lng}propLat=${hotel.lat}&propLng=${
          hotel.lng
        }`
      )
      .then(response => {
        success(response.data);
      })
      .catch(error => {
        failure(error);
      });
  },
  fetchExploreAdsFromAPI: function fetchExploreAdsFromAPI(hotel, location, success, failure) {
    let categoriesToDisplay = [];
    const filteredCategories = [];
    const advertisements = [];

    const currentLat = location.latitude;
    const currentLng = location.longitude;
    const hotelLat = hotel.lat;
    const hotelLng = hotel.lng;
    const marketCode = hotel.market_code;

    const queryUrl = `https://adv.staycompass.com/ads?lat=${currentLat}&lng=${currentLng}&propLat=${hotelLat}&propLng=${hotelLng}&marketCode=${marketCode}`;

    axios
      .get(queryUrl)
      .then(response => {
        response.data.forEach(ad => {
          ad.cat.forEach(cat => {
            categoriesToDisplay.push(cat);
          });
          advertisements.push(ad);
        });
        categoriesToDisplay = Array.from(new Set(categoriesToDisplay)); /* convert to a unique array */

        axios
          .get('https://adv.staycompass.com/categories')
          .then(responseCategory => {
            responseCategory.data.forEach(cat => {
              categoriesToDisplay.forEach(catDisplay => {
                if (cat.key === catDisplay) {
                  filteredCategories.push(cat);
                }
              });
            });

            success({ categories: filteredCategories, advertisements });
          })
          .catch(error => {
            failure(error);
          });
      })
      .catch(error => {
        failure(error);
      });
  }
};

export default api;
