/
├── /public {Public resources available for the public}
|
├── /posts {Shortcut for serve-index to serve the posts in MD format}
|
├── /api {Route reserved for API calls}
|   └──/api/list_posts {Get all available posts with meta-data}
|
├── / {Try to match static files for react frontend}
└── / {At last, we will try to return the index file via indexRouter}
