"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "jade",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
};
let favoriteAcivities;
favoriteAcivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.AUTHOR) {
    console.log(Role.AUTHOR);
}
//# sourceMappingURL=objs-arrays-enums.js.map