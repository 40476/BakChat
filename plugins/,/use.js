app.set('trust proxy', true);
app.use(cookieParser());
app.use(express.static('public'));
app.use(device.capture());
app.use(bodyParser.urlencoded({extended:true}));