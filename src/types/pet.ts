interface Pet {
  id: string;
  name: string;
  type: 'Dog' | 'Cat';
  gender: 'Male' | 'Female';
  age: string;
  breed: string;
  image_uri: string;
  location: Location;
}

interface Location {
  address: string;
}

export default Pet;
