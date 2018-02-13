import React from 'react';
import './css/app_ui_frame.scss';
import Navigation from '../common/Navigation/Navigation';
import TabLinks from '../common/TabLinks/TabLinks';

const AppUiFrame = () => (
  <div>
    <Navigation />
    <TabLinks />
  </div>
);

export default AppUiFrame;
