import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export const ReactLink = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'innerRef' | 'to'>>(
  (props, ref) => <RouterLink innerRef={ref} to={props.href} {...props} />,
);
