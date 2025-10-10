import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  elteSidebar: [
    {
      type: 'category',
      label: 'ELTE-IK',
      link: {
        type: 'doc',
        id: 'elte-ik/index',
      },
      items: [
        {
          type: 'category',
          label: 'Analysis II',
          link: {
            type: 'doc',
            id: 'elte-ik/analizis-ii/index',
          },
          items: [
            {
              type: 'category',
              label: 'Röpzh',
              link: {
                type: 'doc',
                id: 'elte-ik/analizis-ii/ropzh/index',
              },
              items: [
                {
                  type: 'category',
                  label: 'Already Done',
                  link: {
                    type: 'doc',
                    id: 'elte-ik/analizis-ii/ropzh/already-done/README',
                  },
                  items: [
                    'elte-ik/analizis-ii/ropzh/already-done/01',
                    'elte-ik/analizis-ii/ropzh/already-done/02',
                    'elte-ik/analizis-ii/ropzh/already-done/03',
                    'elte-ik/analizis-ii/ropzh/already-done/04',
                  ],
                },
                'elte-ik/analizis-ii/ropzh/05',
                'elte-ik/analizis-ii/ropzh/06',
                'elte-ik/analizis-ii/ropzh/07',
                'elte-ik/analizis-ii/ropzh/08',
                'elte-ik/analizis-ii/ropzh/09',
                'elte-ik/analizis-ii/ropzh/10',
                'elte-ik/analizis-ii/ropzh/11',
                'elte-ik/analizis-ii/ropzh/12',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
