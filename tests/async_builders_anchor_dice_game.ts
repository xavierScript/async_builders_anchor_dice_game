import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AsyncBuildersAnchorDiceGame } from "../target/types/async_builders_anchor_dice_game";

describe("async_builders_anchor_dice_game", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.asyncBuildersAnchorDiceGame as Program<AsyncBuildersAnchorDiceGame>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
