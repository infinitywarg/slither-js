import { runSlitherScan } from "@infinitywarg/slither-js";

runSlitherScan("/home/ganesh/Documents/github/ledgervm/base-transition").catch(
  (error) => {
    console.error(error);
    process.exitCode = 1;
  }
);
