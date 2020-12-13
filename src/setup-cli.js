const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

try {
    console.log(`Installing @altosra/cli`)
    await exec.exec('npm i -g @altostra/cli');

    const token = core.getInput('api-token');

    console.log(`Setting up credentials`)
    await exec.exec(`alto api-key set ${token}`);

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}