var contributionsInventory = [
    {
        "name":"Atlassian Deployment Triggers",
        "link":"https://bitbucket.org/atlassianlabs/bamboo-after-deployment-trigger/pull-requests/2/fixes-issue-2-eliminate/diff",
        "image":"img/deploysonly.gif",
        "summary":"Addressed pretty significant performance issue for large deployment. Elimination of massive backend query, using asynchronous call against index reduced page load from from 2+ minutes to nearly instant, with incredible responsive search.",
        "tags":[],
        "fact":""
    },
    {
        "name":"Added Docker Build Status Badge to shields.io",
        "link":"https://github.com/badges/shields/pull/856",
        "image":"https://img.shields.io/docker/build/eddiewebb/bitbucket-pipelines-marketplace.svg?style=plastic",
        "summary":"Shields.io is a massive library of badges that can be inserted into project README's or websites displaying various statuses (code coverage, health, version, etc).  Support for docker was missing the current build health, and was a pretty trivial addition.",
        "tags":[],
        "fact":""
    },
    {
        "name":"Enterprise SSH Key Management for Bitbucket",
        "link":"https://github.com/libertymutual/ssh-key-enforcer-stash",
        "image":"",
        "summary":"Worked through company process to open source a solution that enforces key rotation and expiry policies for users and repositories in Atlassian bitbucket.",
        "tags":[],
        "fact":""
    },
    {
        "name":"Schema.org Structured Data documentation fixes",
        "link":"https://github.com/schemaorg/schemaorg/pull/1120",
        "image":"",
        "summary":"Not all pull requests are glorious code, documentation is really important too! This commit fixed some invalid JSON found in some example specs.",
        "tags":[],
        "fact":""
    }



]