export const initialState = {
  posts: {
    data: [
    {
      id: '1',
      title: 'Book',
      price: '$30',
      content: 'Proin fermentum nisl eu sapien cursus porta. Curabitur in gravida nunc, ac cursus augue. Vestibulum accumsan sapien odio, sed porttitor nibh elementum id. ',
      publicationDate: '23.06.2021',
      lastUpdateDate: '12.07.2021',
      email: 'johndoe@example.com',
      image: 'https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      phone: '345654897',
      location: 'Sydney',
      status: 'published'
    },
    {
      id: '2',
      title: 'Phone',
      price: '$200',
      content: 'Donec maximus bibendum tristique. Aliquam erat volutpat. Nulla a rhoncus urna, ac hendrerit lacus. Phasellus enim turpis, fermentum nec purus nec, posuere tempor magna. Mauris rhoncus velit eleifend ligula fringilla, nec sollicitudin massa sagittis.',
      publicationDate: '23.06.2021',
      lastUpdateDate: '12.07.2021',
      email: 'amandadoe@example.com',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      phone: '673982093',
      location: 'New York',
      status: 'published'
    },
    {
      id: '3',
      title: 'Cooking set',
      price: '$80',
      content: 'Nunc vel vulputate magna, eget tempor eros. Pellentesque facilisis vitae dui volutpat posuere. Aenean ultrices augue mi, at blandit felis molestie at. Morbi congue vel est in convallis. Curabitur dapibus et velit eu malesuada. Mauris at posuere ante. ',
      publicationDate: '23.06.2021',
      lastUpdateDate: '12.07.2021',
      email: 'jacksmith@example.com',
      image: 'https://images.pexels.com/photos/4226869/pexels-photo-4226869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      phone: '338501652',
      location: 'Warsaw',
      status: 'published'
    },
  ],
    loading: {
      active: false,
      error: false,
