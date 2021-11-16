export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61934f80e9fe023ddca35807',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jwrkr16i',
                  apiId: '9af1249a-040b-432a-b0f3-88e4fd6c6cbf'
                },
                {
                  buildHookId: '61934f8122ddf7390493d94a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bf2q29ri',
                  apiId: '2c209c28-4b1f-4e79-9748-f2209ab37c4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gutter-trash/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bf2q29ri.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
