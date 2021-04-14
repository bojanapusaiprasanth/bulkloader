module.exports = {
    branches: ["master", "main", "develop"],
    repositoryUrl: "https://github.com/bojanapusaiprasanth/bulkloader"
    plugins: ['@semantic-release/commit-analyzer',
                '@semantic-release/release-notes-generator',
                    '@semantic-release/npm',
                        '@semantic-release/github'
                    ]
}
