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
                  buildHookId: '5e33043015989a1283c18d15',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-iic3r82x',
                  apiId: '9de0fb97-fb6e-40e2-8828-87594b4b5b6b'
                },
                {
                  buildHookId: '5e33043091ca4106701b2b5a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-k5h9tfnc',
                  apiId: '2609f992-47f5-4e4d-a3ac-e00a71e98255'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enjine/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-k5h9tfnc.netlify.com',
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
