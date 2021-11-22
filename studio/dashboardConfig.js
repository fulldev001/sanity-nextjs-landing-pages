export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619b1f9bc6e9b4775cbbd533',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c5kjxbct',
                  apiId: 'cd4dc600-ff06-42e0-9b1f-6182cc6d5f8f'
                },
                {
                  buildHookId: '619b1f9b9ca0eb871170d54b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ayr8dho6',
                  apiId: '8ca07007-8cd0-40a3-b5c1-f2929318fe07'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mr-new-0509/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ayr8dho6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
