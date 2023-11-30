const people = [
  {
    name: {
      first: "John",
      middle: "Edward",
      last: "Smith",
    },
    age: 32,
    occupation: "Engineer",
    address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Jane",
          last: "Smith",
        },
        age: 30,
        occupation: "Doctor",
      },
      children: [
        {
          name: {
            first: "Alice",
            last: "Smith",
          },
          age: 5,
          school: {
            name: "Springfield Elementary",
            grade: 1,
          },
        },
      ],
      pets: [
        {
          name: "Buddy",
          age: 6,
          breed: {
            type: "Dog",
            name: "Golden Retriever",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Emily",
      middle: "Rose",
      last: "Johnson",
    },
    age: 28,
    occupation: "Artist",
    address: {
      street: "456 High St",
      city: "Los Angeles",
      zip: "90001",
      country: "USA",
    },
    family: {
      spouse: null,
      children: [],
      pets: [
        {
          name: "Whiskers",
          age: 2,
          breed: {
            type: "Cat",
            name: "Siamese",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Michael",
      middle: "James",
      last: "Brown",
    },
    age: 45,
    occupation: "Teacher",
    address: {
      street: "789 Elm St",
      city: "Chicago",
      zip: "60007",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Sarah",
          last: "Brown",
        },
        age: 43,
        occupation: "Librarian",
      },
      children: [
        {
          name: {
            first: "Jacob",
            last: "Brown",
          },
          age: 10,
          school: {
            name: "Lincoln Middle School",
            grade: 5,
          },
        },
      ],
      pets: [
        {
          name: "Goldie",
          age: 1,
          breed: {
            type: "Fish",
            name: "Goldfish",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Rachel",
      middle: "Marie",
      last: "Thompson",
    },
    age: 27,
    occupation: "Software Developer",
    address: {
      street: "85 Oak Street",
      city: "San Francisco",
      zip: "94107",
      country: "USA",
    },
    family: {
      spouse: null,
      children: [
        {
          name: {
            first: "Jacob",
            last: "Thompson",
          },
          age: 11,
          school: {
            name: "Lincoln Middle School",
            grade: 6,
          },
        },
      ],
      pets: [
        {
          name: "Max",
          age: 6,
          breed: {
            type: "Dog",
            name: "Beagle",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "David",
      middle: "Allen",
      last: "Martinez",
    },
    age: 35,
    occupation: "Architect",
    address: {
      street: "922 Elm Road",
      city: "Austin",
      zip: "73301",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Melissa",
          last: "Martinez",
        },
        age: 34,
        occupation: "Interior Designer",
      },
      children: [
        {
          name: {
            first: "Sophia",
            last: "Martinez",
          },
          age: 7,
          school: {
            name: "Austin Elementary",
            grade: 2,
          },
        },
      ],
      pets: [
        {
          name: "Sparky",
          age: 2,
          breed: {
            type: "Dog",
            name: "Corgi",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Anthony",
      middle: "Joseph",
      last: "Gonzalez",
    },
    age: 42,
    occupation: "Police Officer",
    address: {
      street: "340 Pine Lane",
      city: "Phoenix",
      zip: "85001",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Laura",
          last: "Gonzalez",
        },
        age: 40,
        occupation: "School Teacher",
      },
      children: [
        {
          name: {
            first: "Ethan",
            last: "Gonzalez",
          },
          age: 14,
          school: {
            name: "Phoenix Middle School",
            grade: 8,
          },
        },
        {
          name: {
            first: "Olivia",
            last: "Gonzalez",
          },
          age: 10,
          school: {
            name: "Phoenix Elementary School",
            grade: 5,
          },
        },
      ],
      pets: [
        {
          name: "Bella",
          age: 3,
          breed: {
            type: "Cat",
            name: "Persian",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Rebecca",
      middle: "Lynn",
      last: "Parker",
    },
    age: 38,
    occupation: "Dentist",
    address: {
      street: "47 Cherry Lane",
      city: "Denver",
      zip: "80202",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Brian",
          last: "Parker",
        },
        age: 40,
        occupation: "Pharmacist",
      },
      children: [
        {
          name: {
            first: "Liam",
            last: "Parker",
          },
          age: 12,
          school: {
            name: "Denver Middle School",
            grade: 6,
          },
        },
      ],
      pets: [
        {
          name: "Mittens",
          age: 4,
          breed: {
            type: "Cat",
            name: "Maine Coon",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Christopher",
      middle: "Paul",
      last: "Adams",
    },
    age: 50,
    occupation: "Pilot",
    address: {
      street: "830 Airport Road",
      city: "Atlanta",
      zip: "30320",
      country: "USA",
    },
    family: {
      spouse: null,
      children: [],
      pets: [
        {
          name: "Charlie",
          age: 6,
          breed: {
            type: "Dog",
            name: "Labrador Retriever",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Nicole",
      middle: "Marie",
      last: "Robinson",
    },
    age: 29,
    occupation: "Marketing Manager",
    address: {
      street: "295 Market Street",
      city: "Seattle",
      zip: "98101",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Matthew",
          last: "Robinson",
        },
        age: 31,
        occupation: "Financial Analyst",
      },
      children: [],
      pets: [
        {
          name: "Oscar",
          age: 2,
          breed: {
            type: "Bird",
            name: "Canary",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Elizabeth",
      middle: "Grace",
      last: "Taylor",
    },
    age: 33,
    occupation: "Biologist",
    address: {
      street: "621 Science Drive",
      city: "Boston",
      zip: "02110",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "James",
          last: "Taylor",
        },
        age: 35,
        occupation: "Chemist",
      },
      children: [
        {
          name: {
            first: "Ella",
            last: "Taylor",
          },
          age: 5,
          school: {
            name: "Boston Elementary School",
            grade: "Kindergarten",
          },
        },
      ],
      pets: [
        {
          name: "Shelly",
          age: 1,
          breed: {
            type: "Turtle",
            name: "Red-Eared Slider",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Robert",
      middle: "James",
      last: "Anderson",
    },
    age: 40,
    occupation: "Lawyer",
    address: {
      street: "789 Pine St",
      city: "San Francisco",
      zip: "94101",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Patricia",
          last: "Anderson",
        },
        age: 38,
        occupation: "Accountant",
      },
      children: [
        {
          name: {
            first: "Emily",
            last: "Anderson",
          },
          age: 12,
          school: {
            name: "San Francisco Middle School",
            grade: 7,
          },
        },
        {
          name: {
            first: "Ryan",
            last: "Anderson",
          },
          age: 10,
          school: {
            name: "San Francisco Elementary School",
            grade: 5,
          },
        },
        {
          name: {
            first: "Sophie",
            last: "Anderson",
          },
          age: 7,
          school: {
            name: "San Francisco Elementary School",
            grade: 2,
          },
        },
      ],
      pets: [
        {
          name: "Fluffy",
          age: 3,
          breed: {
            type: "Cat",
            name: "Persian",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Linda",
      middle: "Susan",
      last: "Harris",
    },
    age: 35,
    occupation: "Software Developer",
    address: {
      street: "456 Oak St",
      city: "Seattle",
      zip: "98101",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Daniel",
          last: "Harris",
        },
        age: 37,
        occupation: "Architect",
      },
      children: [
        {
          name: {
            first: "Oliver",
            last: "Harris",
          },
          age: 10,
          school: {
            name: "Seattle Elementary School",
            grade: 5,
          },
        },
        {
          name: {
            first: "Emma",
            last: "Harris",
          },
          age: 8,
          school: {
            name: "Seattle Elementary School",
            grade: 3,
          },
        },
        {
          name: {
            first: "Lucas",
            last: "Harris",
          },
          age: 5,
          school: {
            name: "Seattle Pre-School",
            grade: "Pre-K",
          },
        },
      ],
      pets: [
        {
          name: "Buddy",
          age: 7,
          breed: {
            type: "Dog",
            name: "Golden Retriever",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Thomas",
      middle: "Edward",
      last: "Miller",
    },
    age: 45,
    occupation: "Doctor",
    address: {
      street: "1234 Elm St",
      city: "Chicago",
      zip: "60007",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Margaret",
          last: "Miller",
        },
        age: 43,
        occupation: "Nurse",
      },
      children: [
        {
          name: {
            first: "Jacob",
            last: "Miller",
          },
          age: 15,
          school: {
            name: "Chicago High School",
            grade: 10,
          },
        },
        {
          name: {
            first: "Mia",
            last: "Miller",
          },
          age: 13,
          school: {
            name: "Chicago Middle School",
            grade: 8,
          },
        },
        {
          name: {
            first: "Ethan",
            last: "Miller",
          },
          age: 10,
          school: {
            name: "Chicago Elementary School",
            grade: 5,
          },
        },
      ],
      pets: [
        {
          name: "Goldie",
          age: 2,
          breed: {
            type: "Fish",
            name: "Goldfish",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Elizabeth",
      middle: "Marie",
      last: "Davis",
    },
    age: 38,
    occupation: "Teacher",
    address: {
      street: "5678 Pine St",
      city: "Houston",
      zip: "77001",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Joseph",
          last: "Davis",
        },
        age: 40,
        occupation: "Engineer",
      },
      children: [
        {
          name: {
            first: "Ava",
            last: "Davis",
          },
          age: 12,
          school: {
            name: "Houston Middle School",
            grade: 7,
          },
        },
        {
          name: {
            first: "William",
            last: "Davis",
          },
          age: 10,
          school: {
            name: "Houston Elementary School",
            grade: 5,
          },
        },
        {
          name: {
            first: "Isabella",
            last: "Davis",
          },
          age: 7,
          school: {
            name: "Houston Elementary School",
            grade: 2,
          },
        },
      ],
      pets: [
        {
          name: "Max",
          age: 5,
          breed: {
            type: "Dog",
            name: "Beagle",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Jennifer",
      middle: "Lynn",
      last: "Wilson",
    },
    age: 37,
    occupation: "Architect",
    address: {
      street: "9012 Maple St",
      city: "Phoenix",
      zip: "85001",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Charles",
          last: "Wilson",
        },
        age: 39,
        occupation: "Scientist",
      },
      children: [
        {
          name: {
            first: "Alexander",
            last: "Wilson",
          },
          age: 11,
          school: {
            name: "Phoenix Middle School",
            grade: 6,
          },
        },
        {
          name: {
            first: "Sophia",
            last: "Wilson",
          },
          age: 9,
          school: {
            name: "Phoenix Elementary School",
            grade: 4,
          },
        },
        {
          name: {
            first: "Benjamin",
            last: "Wilson",
          },
          age: 6,
          school: {
            name: "Phoenix Elementary School",
            grade: 1,
          },
        },
      ],
      pets: [
        {
          name: "Bella",
          age: 4,
          breed: {
            type: "Cat",
            name: "Persian",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "William",
      middle: "George",
      last: "Taylor",
    },
    age: 46,
    occupation: "Professor",
    address: {
      street: "3456 Birch St",
      city: "San Diego",
      zip: "92101",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Mary",
          last: "Taylor",
        },
        age: 44,
        occupation: "Librarian",
      },
      children: [
        {
          name: {
            first: "James",
            last: "Taylor",
          },
          age: 15,
          school: {
            name: "San Diego High School",
            grade: 10,
          },
        },
        {
          name: {
            first: "Emma",
            last: "Taylor",
          },
          age: 13,
          school: {
            name: "San Diego Middle School",
            grade: 8,
          },
        },
        {
          name: {
            first: "Oliver",
            last: "Taylor",
          },
          age: 10,
          school: {
            name: "San Diego Elementary School",
            grade: 5,
          },
        },
      ],
      pets: [
        {
          name: "Charlie",
          age: 6,
          breed: {
            type: "Dog",
            name: "Labrador Retriever",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Jessica",
      middle: "Ann",
      last: "Moore",
    },
    age: 33,
    occupation: "Nurse",
    address: {
      street: "7890 Cedar St",
      city: "Dallas",
      zip: "75201",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Michael",
          last: "Moore",
        },
        age: 35,
        occupation: "Engineer",
      },
      children: [
        {
          name: {
            first: "Sophia",
            last: "Moore",
          },
          age: 8,
          school: {
            name: "Dallas Elementary School",
            grade: 3,
          },
        },
        {
          name: {
            first: "Jacob",
            last: "Moore",
          },
          age: 6,
          school: {
            name: "Dallas Elementary School",
            grade: 1,
          },
        },
        {
          name: {
            first: "Mia",
            last: "Moore",
          },
          age: 4,
          school: {
            name: "Dallas Pre-School",
            grade: "Pre-K",
          },
        },
      ],
      pets: [
        {
          name: "Whiskers",
          age: 2,
          breed: {
            type: "Cat",
            name: "Siamese",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Daniel",
      middle: "Joseph",
      last: "Clark",
    },
    age: 39,
    occupation: "Architect",
    address: {
      street: "1234 Maple St",
      city: "Philadelphia",
      zip: "19019",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Sarah",
          last: "Clark",
        },
        age: 37,
        occupation: "Teacher",
      },
      children: [
        {
          name: {
            first: "Ethan",
            last: "Clark",
          },
          age: 10,
          school: {
            name: "Philadelphia Elementary School",
            grade: 5,
          },
        },
        {
          name: {
            first: "Ava",
            last: "Clark",
          },
          age: 8,
          school: {
            name: "Philadelphia Elementary School",
            grade: 3,
          },
        },
        {
          name: {
            first: "William",
            last: "Clark",
          },
          age: 6,
          school: {
            name: "Philadelphia Elementary School",
            grade: 1,
          },
        },
      ],
      pets: [
        {
          name: "Buddy",
          age: 5,
          breed: {
            type: "Dog",
            name: "Golden Retriever",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Patricia",
      middle: "Lynn",
      last: "Lewis",
    },
    age: 36,
    occupation: "Software Developer",
    address: {
      street: "5678 Oak St",
      city: "Phoenix",
      zip: "85001",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "David",
          last: "Lewis",
        },
        age: 38,
        occupation: "Engineer",
      },
      children: [
        {
          name: {
            first: "Oliver",
            last: "Lewis",
          },
          age: 9,
          school: {
            name: "Phoenix Elementary School",
            grade: 4,
          },
        },
        {
          name: {
            first: "Sophia",
            last: "Lewis",
          },
          age: 7,
          school: {
            name: "Phoenix Elementary School",
            grade: 2,
          },
        },
        {
          name: {
            first: "Jacob",
            last: "Lewis",
          },
          age: 5,
          school: {
            name: "Phoenix Pre-School",
            grade: "Pre-K",
          },
        },
      ],
      pets: [
        {
          name: "Whiskers",
          age: 3,
          breed: {
            type: "Cat",
            name: "Siamese",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Christopher",
      middle: "Brian",
      last: "Robinson",
    },
    age: 42,
    occupation: "Scientist",
    address: {
      street: "3456 Birch St",
      city: "Austin",
      zip: "73301",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Nancy",
          last: "Robinson",
        },
        age: 40,
        occupation: "Nurse",
      },
      children: [
        {
          name: {
            first: "Mason",
            last: "Robinson",
          },
          age: 12,
          school: {
            name: "Austin Middle School",
            grade: 7,
          },
        },
        {
          name: {
            first: "Emily",
            last: "Robinson",
          },
          age: 10,
          school: {
            name: "Austin Elementary School",
            grade: 5,
          },
        },
        {
          name: {
            first: "Alexander",
            last: "Robinson",
          },
          age: 8,
          school: {
            name: "Austin Elementary School",
            grade: 3,
          },
        },
      ],
      pets: [
        {
          name: "Max",
          age: 4,
          breed: {
            type: "Dog",
            name: "Beagle",
          },
        },
      ],
    },
  },
  {
    name: {
      first: "Laura",
      middle: "Jean",
      last: "Thompson",
    },
    age: 38,
    occupation: "Engineer",
    address: {
      street: "7890 Cedar St",
      city: "San Antonio",
      zip: "78201",
      country: "USA",
    },
    family: {
      spouse: {
        name: {
          first: "Steven",
          last: "Thompson",
        },
        age: 40,
        occupation: "Architect",
      },
      children: [
        {
          name: {
            first: "Ella",
            last: "Thompson",
          },
          age: 11,
          school: {
            name: "San Antonio Middle School",
            grade: 6,
          },
        },
        {
          name: {
            first: "Michael",
            last: "Thompson",
          },
          age: 9,
          school: {
            name: "San Antonio Elementary School",
            grade: 4,
          },
        },
        {
          name: {
            first: "Abigail",
            last: "Thompson",
          },
          age: 6,
          school: {
            name: "San Antonio Elementary School",
            grade: 1,
          },
        },
      ],
      pets: [
        {
          name: "Bella",
          age: 3,
          breed: {
            type: "Cat",
            name: "Persian",
          },
        },
      ],
    },
  },
];

console.log(people.length);
console.log(`${people[3].name.first} ${people[3].name.last}`);
console.log(people[2].family.children.length);
console.log(people[6].address.street);
console.log(people.filter((p) => p.age > 30).length);

let sum = 0,
  counter = 0;
people.forEach((p) => {
  if (p.family?.spouse?.age) {
    counter++;
    sum += p.family.spouse.age;
  }
});
console.log(sum / counter);
