enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "jade",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};

let favoriteAcivities: any[];
favoriteAcivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.AUTHOR) {
  console.log(Role.AUTHOR);
}
