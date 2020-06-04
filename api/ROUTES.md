app.use('/public', express.static(path.join(__dirname, 'client/build')));
app.use('/public_resources', express.static(path.join(__dirname, 'public_resources')));
app.use('/static', express.static(path.join(__dirname, 'client/build/static')));
app.use('/posts', serveIndex(path.join(__dirname, 'public/markdowns')));
app.use('/api', fetchRouter);
--router.get("/list_posts", async function(req, res, next)
app.use('/', indexRouter);
--router.get('/', function(req, res)