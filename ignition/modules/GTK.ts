import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const GTKModule = buildModule("GTKModule", (m) => {

  const GTKToken = m.contract("GTK");

  return { GTKToken };
});

export default GTKModule;

