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
                  buildHookId: '609821af251487cc81856d91',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zvbxdmvt',
                  apiId: '452bb8ac-6863-4ffb-9727-c33176dbadef'
                },
                {
                  buildHookId: '609821af4cc3e7e4975fad76',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i7crskcf',
                  apiId: '68e590f2-6395-450f-8a5f-584f4167d5a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ialim/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i7crskcf.netlify.app', category: 'apps'}
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
