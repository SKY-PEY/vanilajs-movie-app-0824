import {Store} from '../core/heropy'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State> ({
  photo : 'https://heropy.blog/css/images/logo.png',
  name: 'PEY / ParkEunYeong',
  email: 'lovr8537@gmail.com',
  blog: 'https://velog.io/@sky-pey',
  github: 'https://github.com/SKY-PEY',
  repository: "https://github.com/SKY-PEY/vanilajs-movie-app-0824"
})