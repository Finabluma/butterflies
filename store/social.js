export const socialQuery = `
  *[_type == "settingsSocial" && !(_id in path('drafts.**'))]{
    socialSites[] {
      facebookUrl,
      twitterUrl,
      instagramUrl,
    },
    twitterHandle
  }[0]
`

export const state = () => ({
  socialSites: [],
  twitterHandle: '',
})

export const mutations = {
  setData(state, data) {
    state.socialSites = data ? data.socialSites : []
    state.twitterHandle = data ? data.twitterHandle : ''
  },
}
