export interface Gist {
    type: [],
    items: {
        title: string,
        description: string,
        type: object,
        properties: {
            url: {
                type: string,
            },
            forks_url: {
                type: string,
            },
            commits_url: {
                type: string,
            },
            id: {
                type: string
            },
            node_id: {
                type: string
            },
            git_pull_url: {
                type: string,
            },
            git_push_url: {
                type: string,
            },
            html_url: {
                type: string,
            },
            files: {
                type: object,
                additionalProperties: {
                    type: object,
                    properties: {
                        filename: {
                            type: string
                        },
                        type: {
                            type: string
                        },
                        language: {
                            type: string
                        },
                        raw_url: {
                            type: string
                        },
                        size: {
                            type: number
                        }
                    }
                }
            },
            public: {
                type: boolean
            },
            created_at: {
                type: string,
            },
            updated_at: {
                type: string
            },
            description: {
                type: [
                    string,
                    null
                ]
            },
            comments: {
                type: number
            },
            user: {
                anyOf: [
                    {
                        type: null
                    },
                    {
                        title: string,
                        description: string,
                        type: object,
                        properties: {
                            name: {
                                type: [
                                    string,
                                    null
                                ]
                            },
                            email: {
                                type: [
                                    string,
                                    null
                                ]
                            },
                            login: {
                                type: string,

                            },
                            id: {
                                type: number,

                            },
                            node_id: {
                                type: string,

                            },
                            avatar_url: {
                                type: string,


                            },
                            gravatar_id: {
                                type: [
                                    string,
                                    null
                                ],

                            },
                            url: {
                                type: string,


                            },
                            html_url: {
                                type: string,


                            },
                            followers_url: {
                                type: string,


                            },
                            following_url: {
                                type: string,

                            },
                            gists_url: {
                                type: string,

                            },
                            starred_url: {
                                type: string,

                            },
                            subscriptions_url: {
                                type: string,


                            },
                            organizations_url: {
                                type: string,


                            },
                            repos_url: {
                                type: string,


                            },
                            events_url: {
                                type: string,

                            },
                            received_events_url: {
                                type: string,


                            },
                            type: {
                                type: string,

                            },
                            site_admin: {
                                type: boolean
                            },
                            starred_at: {
                                type: string,

                            }
                        },
                    }
                ]
            },
            comments_url: {
                type: string
            },
            owner: {
                title: string,
                description: string,
                type: object,
                properties: {
                    name: {
                        type: [
                            string,
                            null
                        ]
                    },
                    email: {
                        type: [
                            string,
                            null
                        ]
                    },
                    login: {
                        type: string,

                    },
                    id: {
                        type: number,

                    },
                    node_id: {
                        type: string,

                    },
                    avatar_url: {
                        type: string,

                    },
                    gravatar_id: {
                        type: [
                            string,
                            null
                        ],

                    },
                    url: {
                        type: string,

                    },
                    html_url: {
                        type: string,

                    },
                    followers_url: {
                        type: string,

                    },
                    following_url: {
                        type: string,

                    },
                    gists_url: {
                        type: string,

                    },
                    starred_url: {
                        type: string,

                    },
                    subscriptions_url: {
                        type: string,

                    },
                    organizations_url: {
                        type: string,

                    },
                    repos_url: {
                        type: string,

                    },
                    events_url: {
                        type: string,

                    },
                    received_events_url: {
                        type: string,

                    },
                    type: {
                        type: string,

                    },
                    site_admin: {
                        type: boolean
                    },
                    starred_at: {
                        type: string,

                    }
                },
            },
            truncated: {
                type: boolean
            },
            forks: {
                type: [],
                items: {}
            },
            history: {
                type: [],
                items: {}
            }
        },
    }
}
