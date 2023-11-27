// import { Greeter } from "../generated/schema";
// // import { GreetingChanged } from "../generated/Greeting/Greeting";
// import { GreetingSet } from "../generated/Greeting/Greeting";

// export function handleGreetingSet(event: GreetingSet): void {
//   let greeting = new Greeter(
//     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//   );
//   greeting.greeting = event.params.greeting;
//   greeting.timestamp = event.block.timestamp;

//   greeting.save();
// }
