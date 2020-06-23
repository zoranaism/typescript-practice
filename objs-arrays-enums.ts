// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
// // const person = {
//     name: 'Zorana', 
//     age: 31, 
//     hobbies: ["Yoga", "Bootcamp", "Music"], 
//     role: [2, "author"]
// };

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "adming", "user"]

// const ADMIN = 0;
// const READ_ONLY = 1; 
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Zorana', 
    age: 31, 
    hobbies: ["Yoga", "Bootcamp", "Music"], 
    role: Role.ADMIN
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
    
}