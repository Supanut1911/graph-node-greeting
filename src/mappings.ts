import { Greeter } from "../generated/schema";
import { GreetingSet } from "../generated/Greeter/Greeter";

export function handleGreetingSet(event: GreetingSet): void {
  let greeting = new Greeter(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  greeting.greeting = event.params.greeting;
  greeting.timestamp = event.block.timestamp;

  greeting.save();
}
