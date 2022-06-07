import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import cx from 'classnames';

export const Link = ({ children, className, href, to, ...rest }) => {
  const LinkTag = to ? RouterLink : 'a';

  return (
    <LinkTag className={cx(className, 'bx--link')} {...rest} {...{ href, to }}>
      {children}
    </LinkTag>
  );
};

Link.propTypes = {
  /**
   * content of the link
   */
  children: PropTypes.node,
  /**
   * classes to be added to the link
   */
  className: PropTypes.string,
  /**
   * target url for a non-router link
   */
  href: PropTypes.string,
  /**
   * target for react-router-dom
   */
  to: PropTypes.string,
};
