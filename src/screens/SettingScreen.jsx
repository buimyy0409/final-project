// import React, { useContext } from 'react';
// import { Switch } from 'antd';
// import { ThemeContext } from '../modal/ThemeContext';
// import { ThemeProvider } from '../modal/ThemeContext';


// function SettingScreen() {
//   const { theme, onChangeTheme } = useContext(ThemeContext);

//   const onChange = (checked) => {
//     onChangeTheme((newTheme) => {
//       console.log(`Switch to ${newTheme}`);
//     });
//   };

//   console.log(theme);

//   return (
//     <ThemeProvider>
//     <div>
//              <Switch defaultChecked={theme === 'dark'} onChange={onChange} />
//     </div>
//     </ThemeProvider>
//   );
// }

// export default SettingScreen;