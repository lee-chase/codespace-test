import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';

export const ProtoHeader = ({ panels, routes }) => {
  // eslint-disable-next-line no-unused-vars
  const [panelStates, setPanelStates] = useState(
    panels ? panels.map((panel) => ({ id: panel.id, expanded: false })) : []
  );
  // eslint-disable-next-line no-unused-vars
  const handlePanelToggleClick = (id) => {
    setPanelStates((prev) =>
      prev.map((panel) => ({
        ...panel,
        expanded: panel.id === id && !panel.expanded,
      }))
    );
  };

  const homeRoute = routes[0];
  const nonErrorRoutes = routes.filter(
    (route) => route.label !== undefined && route.path !== undefined
  );

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon React sample">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName element={Link} to={homeRoute.path} prefix="IBM">
            Carbon React sample
          </HeaderName>
          {nonErrorRoutes?.length > 0 && (
            <>
              <HeaderNavigation aria-label="Carbon React sample">
                {nonErrorRoutes.map((route) => {
                  return (
                    <HeaderMenuItem
                      element={Link}
                      to={route.path}
                      key={route.path}>
                      {route.label}
                    </HeaderMenuItem>
                  );
                })}
              </HeaderNavigation>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
                isPersistent={false}>
                <SideNavItems>
                  <HeaderSideNavItems>
                    {nonErrorRoutes.map((route) => (
                      <HeaderMenuItem
                        element={Link}
                        to={route.path}
                        key={route.path}>
                        {route.label}
                      </HeaderMenuItem>
                    ))}
                  </HeaderSideNavItems>
                </SideNavItems>
              </SideNav>{' '}
            </>
          )}
          {panels && (
            <HeaderGlobalBar>
              {
                // eslint-disable-next-line no-unused-vars
                panels.map((panel) => (
                  <HeaderGlobalAction
                    aria-label={
                      panelStates.expanded
                        ? panel.toggleLabel[1]
                        : panel.toggleLabel[0]
                    }
                    key={panel.key}
                    onClick={() => handlePanelToggleClick(panel.id)}>
                    <panel.icon />
                  </HeaderGlobalAction>
                ))
              }
              {panels.map((panel) => (
                <HeaderPanel
                  aria-label={panel.label}
                  key={panel.key}
                  expanded={
                    panelStates.find((state) => state.id === panel.id).expanded
                  }>
                  {panel.content ? panel.content : null}
                </HeaderPanel>
              ))}
            </HeaderGlobalBar>
          )}
        </Header>
      )}
    />
  );
};

ProtoHeader.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      toggleLabel: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};
