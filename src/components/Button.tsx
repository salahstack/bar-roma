/**
 * Node modules
 */
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
  ReactNode,
} from 'react';

import { Link } from 'react-router-dom';

/**
 * Interfaces
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classes?: string;
  variant?: 'primary' | 'secondary';
  to?: string;
  target?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  classes = '',
  variant = 'primary',
  to = '',
  target = '_self',
  ...rest
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`btn ${variant} ${classes}`}
        target={target}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`btn ${variant} ${classes}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
};

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classes?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  target?: string;
}

const IconButton: FC<IconButtonProps> = ({
  children,
  classes = '',
  variant = 'primary',
  to = '',
  target = '_self',
  ...rest
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`icon-btn ${variant} ${classes}`}
        target={target}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`icon-btn ${variant} ${classes}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
};

export { Button, IconButton };
