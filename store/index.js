export const state = () => ({
  showMobileNav: false
})

export const mutations = {
  openMobileNav(state) {
    state.showMobileNav = true
  },
  closeMobileNav(state) {
    state.showMobileNav = false
  }
}

export const actions = {
  handleShowNav({ state, commit }) {
    state.showMobileNav ? commit('closeMobileNav') : commit('openMobileNav')
  }
}