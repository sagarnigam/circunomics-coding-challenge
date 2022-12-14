export interface Speaker {
  cell: string;
  email: string;
  gender: string;
  dob: DOB;
  id: ID;
  location: Location;
  login: Login;
  name: Name;
  nat: string;
  phone: string;
  picture: Picture;
  registered: Registered;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Login {
    uuid: string;
    usename: string;
    password: string;
    sha1: string;
    sha256: string;
    md5: string;
    salt: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Registered {
  date: Date;
  age: number;
}

export interface ID {
  name: string;
  value: string;
}

export interface DOB {
  date: Date;
  age: number;
}

export interface Location {
  city: string;
  country: string;
  passcode: number;
  state: string;
  coordinates: Coordinates;
  street: Street;
  timezone: TimeZone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  name: string;
  number: number;
}

export interface TimeZone {
  description: string;
  offset: string;
}
