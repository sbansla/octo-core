const { Octokit } = require('octokit')


const octokit = new Octokit({
    auth: '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'
});

//console.log(process.env.ACCESS_TOKEN)

async function run() {
    const { data: user } = await octokit.request('GET /user');
  
    console.log(`authenticated as ${user.login}`);
}

run()