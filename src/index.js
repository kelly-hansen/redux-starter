const person = {name: "John"};
const updated = {
  ...person,
  address: {
    ...person.address,
    city: "New York"
  },
  name: "Bob"
};
console.log(updated);
