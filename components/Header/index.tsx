import Link from 'next/link';
import React from 'react';
import { Gutter } from '../Gutter';
import { Logo } from '../Logo';

import classes from './index.module.scss';

export const HeaderBar: React.FC = () => {
  return (
    <header className={classes.header}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </Gutter>
    </header>
  )
}

export const Header: React.FC = () => {
  return (
    <>
      <HeaderBar />
    </>
  )
}
