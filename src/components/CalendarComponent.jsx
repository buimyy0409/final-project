import React, { useState } from 'react';
import { Alert, Calendar, theme } from 'antd';
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const CalendarComponent = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 360,
    height: 350,
    border: `2px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    lineHeight: token.lineHeight,
  };
  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};
export default CalendarComponent; 