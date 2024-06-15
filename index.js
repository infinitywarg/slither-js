import { promisify } from "util";
import { exec } from "child_process";
const execute = promisify(exec);

async function runCommand(command) {
  try {
    console.log(`executing ${command}`);
    const { stdout, stderr } = await execute(command);
    console.log("stdout:", stdout);
    console.log("stderr:", stderr);
  } catch (error) {
    console.log(error);
  }
}

async function runSlitherScan(repositoryPath) {
  const slither = "releases/0.10.0/slither";
  await runCommand(`cp ${slither} ${repositoryPath}/slither`);
  await runCommand(`chmod +x ${repositoryPath}/slither`);
  await runCommand(`${repositoryPath}/slither --version`);
  await runCommand(`cd ${repositoryPath} && ${repositoryPath}/slither .`);
}

export { runSlitherScan };
