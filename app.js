const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Specify the views directory
app.set('views', path.join(__dirname, 'views'));


// Static files (if you have any)
app.use(express.static(path.join(__dirname, 'public')));

// Your routes go here
app.get('/', (_, res) => {
  res.render('index'); 
});

app.get('/about', (req, res) => {
    res.render('index/#about');
});


app.get('/contact', (req, res) => {
    res.render('contact');
});


// Route for the Naming Reaction page
app.get('/learn-features/naming-reaction', (req, res) => {
  res.render('learn-features/naming-reaction');
});


// Route for the Sandmayer Reaction page
app.get('/learn-features/reactions/sandmayer-reaction', (req, res) => {
  res.render('learn-features/reactions/sandmayer-reaction');
});

app.get('/learn-features/reactions/gatterman-reaction', (req, res) => {
  res.render('learn-features/reactions/gatterman-reaction');
});

app.get('/learn-features/reactions/wurtz-reaction', (req, res) => {
  res.render('learn-features/reactions/wurtz-reaction');
});

app.get('/learn-features/reactions/wurtz-fitting-reaction', (req, res) => {
  res.render('learn-features/reactions/wurtz-fitting-reaction');
});

app.get('/learn-features/reactions/fitting-reaction', (req, res) => {
  res.render('learn-features/reactions/fitting-reaction');
});

app.get('/learn-features/reactions/friedel-crafts-alkylation-reaction', (req, res) => {
  res.render('learn-features/reactions/friedel-crafts-alkylation-reaction');
});

app.get('/learn-features/reactions/friedel-crafts-acylation-reaction', (req, res) => {
  res.render('learn-features/reactions/friedel-crafts-acylation-reaction');
});

app.get('/learn-features/reactions/reimer-tiemann-reaction', (req, res) => {
  res.render('learn-features/reactions/reimer-tiemann-reaction');
});

app.get('/learn-features/reactions/kolbes-reaction', (req, res) => {
  res.render('learn-features/reactions/kolbes-reaction');
});

app.get('/learn-features/reactions/rosenmund-reduction', (req, res) => {
  res.render('learn-features/reactions/rosenmund-reduction');
});

app.get('/learn-features/reactions/gatterman-koch-reaction', (req, res) => {
  res.render('learn-features/reactions/gatterman-koch-reaction');
});

app.get('/learn-features/reactions/clemmensen-reduction', (req, res) => {
  res.render('learn-features/reactions/clemmensen-reduction');
});

app.get('/learn-features/reactions/wolff-kishner-reduction', (req, res) => {
  res.render('learn-features/reactions/wolff-kishner-reduction');
});

app.get('/learn-features/reactions/tollens-test', (req, res) => {
  res.render('learn-features/reactions/tollens-test');
});

app.get('/learn-features/reactions/fehlings-test', (req, res) => {
  res.render('learn-features/reactions/fehlings-test');
});

app.get('/learn-features/reactions/aldol-reaction', (req, res) => {
  res.render('learn-features/reactions/aldol-reaction');
});

app.get('/learn-features/reactions/aldol-condensation', (req, res) => {
  res.render('learn-features/reactions/aldol-condensation');
});

app.get('/learn-features/reactions/cross-aldol-condensation', (req, res) => {
  res.render('learn-features/reactions/cross-aldol-condensation');
});

app.get('/learn-features/reactions/cannizzaro-reaction', (req, res) => {
  res.render('learn-features/reactions/cannizzaro-reaction');
});

app.get('/learn-features/reactions/kolbe-electrolysis', (req, res) => {
  res.render('learn-features/reactions/kolbe-electrolysis');
});

app.get('/learn-features/reactions/hell-volhard-zelinsky-reaction', (req, res) => {
  res.render('learn-features/reactions/hell-volhard-zelinsky-reaction');
});

app.get('/learn-features/reactions/hoffmann-bromamide-degradation-reaction', (req, res) => {
  res.render('learn-features/reactions/hoffmann-bromamide-degradation-reaction');
});

app.get('/learn-features/reactions/carbylamine-reaction', (req, res) => {
  res.render('learn-features/reactions/carbylamine-reaction');
});

app.get('/learn-features/reactions/coupling-reaction', (req, res) => {
  res.render('learn-features/reactions/coupling-reaction');
});

app.get('/learn-features/reactions/diazotization-reaction', (req, res) => {
  res.render('learn-features/reactions/diazotization-reaction');
});

app.get('/learn-features/reactions/perkin-condensation', (req, res) => {
  res.render('learn-features/reactions/perkin-condensation');
});

app.get('/learn-features/reactions/benzoin-condensation', (req, res) => {
  res.render('learn-features/reactions/benzoin-condensation');
});

app.get('/learn-features/reactions/claisen-condensation', (req, res) => {
  res.render('learn-features/reactions/claisen-condensation');
});

app.get('/learn-features/reactions/ozonolysis', (req, res) => {
  res.render('learn-features/reactions/ozonolysis');
});

app.get('/learn-features/reactions/2,4DNP-test', (req, res) => {
  res.render('learn-features/reactions/2,4DNP-test');
});

app.get('/learn-features/reactions/iodoform-test', (req, res) => {
  res.render('learn-features/reactions/iodoform-test');
});

app.get('/learn-features/reactions/kolbes-reaction-carboxylation', (req, res) => {
  res.render('learn-features/reactions/kolbes-reaction-carboxylation');
});

app.get('/learn-features/reactions/lucas-test', (req, res) => {
  res.render('learn-features/reactions/lucas-test');
});

app.get('/learn-features/reactions/williamson-ether-synthesis', (req, res) => {
  res.render('learn-features/reactions/williamson-ether-synthesis');
});

app.get('/learn-features/reactions/hydroboration-oxidation', (req, res) => {
  res.render('learn-features/reactions/hydroboration-oxidation');
});

app.get('/learn-features/reactions/oxo-process', (req, res) => {
  res.render('learn-features/reactions/oxo-process');
});

app.get('/learn-features/reactions/hoffmans-ammonolysis', (req, res) => {
  res.render('learn-features/reactions/hoffmans-ammonolysis');
});

app.get('/learn-features/reactions/esterification', (req, res) => {
  res.render('learn-features/reactions/esterification');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
