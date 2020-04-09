const keys =
{
    google: 
    {
        clientID : "136820812690-67her9728bs0mehlag2v6sd6sfrc5brv.apps.googleusercontent.com",
        clientSecret : "6jsMkmr-X9FL9QBeZZYBe9kc"
    },
    facebook:
    {
        clientID:'265130764488282',
        clientSecret: '1550b681a0182bebc667a05127ef48fe'
    },
    github:
    {
        clientID:'35dfa2ce170e0c037470',
        clientSecret:'bc68685e3e501cd07d141a978369ae8d9e9a6a5e'
    },
    postgresdb:
    {
        user:'jvcnblqrwlajbw',
        host:"ec2-52-202-106-147.compute-1.amazonaws.com",
        database:"dtmt9kf09nb00",
        password:"695d1b8fee91ddbb51d18ba1261c260ff3ff1e25668a906c533d0e8a5667434a",
        port:5432,
        ssl:true
    },
    session:{
        cookieKey: 'thisismyuniquecookiekey'
    }
}
module.exports = keys;