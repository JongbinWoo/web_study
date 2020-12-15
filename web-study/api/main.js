//데이터 받아오는...
const express = require('express');

const app = express();

const data = {
    avengers : {
        director: '루소 형제',
        year: '2019'
    },
    iron_man: {
        director: '존 파브로',
        year: '2008',
    },
    captin_america : {
        director: '루소 형제',
        year: '2016'
    },
}

app.get('/movie/', (req, res) => {
    // console.log(req.headers);
    console.log('query: ', req.query);
    console.log('params: ', req.params);

    const {query, params} = req;

    switch(query.name) {
        case 'ironman':
            res.status(200).json(data.iron_man);
            return;
            
        case 'captin-america':
            res.status(200).json(data.captin_america);
            return;
        case 'avengers':
            res.status(200).json(data.avengers);
            return;
        default:
            res.status(400);
            return;

    }
    res.status(200).send('movie');
});

// app.post();
// app.put();

app.use('*', (req,res) => {
    res.send('404 Not Found');
});

app.listen(4000);

//const passward = 'ass';
//틀리면 403, 없으면 404