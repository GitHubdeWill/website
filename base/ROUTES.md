# Routes
```
/
├── /public {Public resources available for the public (posts, photo gallery etc.)}
|
├── /posts {Shortcut for serve-index to serve the posts in MD format}
|
├── /api {Route reserved for API calls through fetch_apiRouter}
|   └──/api/list_posts {Get all available posts with meta-data}
|
├── /post/* {Generated links for individual blog posts}
|
└── /* {At last, we will try to return the index file and static files via indexRouter}
```
