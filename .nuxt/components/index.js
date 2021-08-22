export { default as Logo } from '../../components/Logo.vue'
export { default as Exp } from '../../components/exp.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as Navbar } from '../../components/navbar.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyExp = import('../../components/exp.vue' /* webpackChunkName: "components/exp" */).then(c => c.default || c)
export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
