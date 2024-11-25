// Simple RPG Interaction
const output = document.getElementById("output");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

// Player Stats
let player = {
  name: "Hero",
  health: 100,
  inventory: [],
};

// Simple Command Handler
submit.addEventListener("click", () => {
  const command = input.value.toLowerCase();
  input.value = ""; // Clear input
  handleCommand(command);
});

function handleCommand(command) {
  if (command.includes("look")) {
    output.innerText = "You see a forest. There's a path to the north.";
  } else if (command.includes("take sword")) {
    player.inventory.push("sword");
    output.innerText = "You pick up a rusty sword.";
  } else if (command.includes("inventory")) {
    output.innerText = `Your inventory: ${player.inventory.join(", ")}`;
  } else {
    output.innerText = "I don't understand that command.";
  }
}
