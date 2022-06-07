import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Content, Dropdown } from 'carbon-components-react';

import { ProtoHeader } from './components/ProtoHeader';

import { routes } from './config/routes';
import { sidePanels } from './config/sidePanels';

const themeOptions = [
  { id: 'white', text: 'White' },
  { id: 'g10', text: 'Grey 10' },
  { id: 'g90', text: 'Grey 90' },
  { id: 'g100', text: 'Grey 100' },
];

function App() {
  const initialTheme = themeOptions[1];
  const themeClassString = (theme) => `carbon-theme--${theme}`;
  const [themeClass, setThemeClass] = useState(
    themeClassString(initialTheme.id)
  );
  const handleThemeChange = (ev) => {
    setThemeClass(themeClassString(ev.selectedItem.id));
  };

  console.dir(routes);

  return (
    <div className={`app ${themeClass}`}>
      <ProtoHeader
        className="app__header"
        panels={sidePanels}
        routes={routes}
      />
      <Content className="app__content">
        <Switch>
          {routes.map(({ component: Component, ...rest }) => (
            <Route {...rest} key={rest.path || 'default'}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Content>
      <div className="app__options">
        <Dropdown
          id="Theme selector"
          titleText="Theme selector"
          label="Theme options"
          items={themeOptions}
          initialSelectedItem={initialTheme}
          itemToString={(item) => (item ? item.text : '')}
          onChange={handleThemeChange}
        />
      </div>
    </div>
  );
}

export default App;
