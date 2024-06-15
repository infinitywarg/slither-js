import { exec } from "child_process";

function runCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failed ${command} \n Result: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Failed ${command} \n Result: ${stderr}`);
      return;
    }
    console.log(`Success ${command} \n Result: ${stdout}`);
  });
}

function runSlitherScan(repositoryPath) {
  // commands are being executed non-blocking
  // change runcommand to return promise and then use async/await in this function
  const appPath = "releases/0.10.0/slither";
  runCommand(`chmod +x ${appPath}`);
  runCommand(`${appPath} --version`);
  runCommand(`cd ${repositoryPath}`);
  runCommand(`pwd`);
  runCommand(`${appPath} .`);
}

export { runSlitherScan };
