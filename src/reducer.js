export const initHotels = [
  {
    id: 1,
    name: 'Pod akacjami',
    city: 'Warszawa',
    rating: '8.5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://picsum.photos/id/237/300/200',
  },
  {
    id: 2,
    name: 'Dębowy',
    city: 'Lublin',
    rating: '9',
    description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://picsum.photos/id/238/300/200',
  }
]

export const reducer = (state, action) => {
  switch (action.type) {
    case 'set-loading':
      return {
        ...state,
        loading: action.isLoading,
      }
    case 'login':
      return {
        ...state,
        user: true,
      }
    case 'logout': 
      return {
        ...state,
        user: false,
      }
    default:
      throw new Error(`Nie ma takiej akcji ${action.type}`)
  }
}

const initState = {
  color: 'primary',
  loading: true,
  user: null,
}