export const pagesQuery = `*[_type == 'page' && !(_id in path('drafts.**'))]{
  pageMetaData{
   pageDescription,
   pageShareImage,
   pageTitle
  },
  title,
  pageSections[],
  'slug':slug.current,
  'updatedAt': _updatedAt,
  'createdAt': _createdAt,
}`

export const state = () => ({
  pages: [],
})

export const mutations = {
  setData(state, data) {
    state.pages = data || []
  },
}
