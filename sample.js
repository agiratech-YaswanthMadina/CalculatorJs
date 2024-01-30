
// class StudentDetails {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
//   export default StudentDetails;


console.log("Hii");

const url = "https://apis.ccbp.in/jokes/random";
const run = async () => {
  const a = fetch(url);
  console.log(a);
  const b = await a;
  console.log(b);
};
run();

console.log("Hello");