import React from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths
} from 'next';
import Blocks from '../components/Blocks';
import { Hero } from '../components/Hero';
import type { Page } from '../payload-types';

const Page: React.FC<{
  page: Page
}> = (props) => {
  const {
    page: {
      hero,
      layout,
    },
  } = props;

  return (
    <React.Fragment>
      <Hero {...hero} />
      <Blocks blocks={layout} />
    </React.Fragment>
  )
}

export default Page;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const { params } = context;

  const slug = params?.slug || 'home';

  const pageQuery = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${slug}`).then(
    (res) => res.json(),
  );

  return {
    props: {
      page: pageQuery.docs[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const pagesQuery: { docs: Page[] } = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?limit=100`).then(
    (res) => res.json(),
  );

  return {
    paths: pagesQuery.docs.map((page) => ({
      params: {
        slug: page.slug,
      },
    })),
    fallback: 'blocking',
  };
};
