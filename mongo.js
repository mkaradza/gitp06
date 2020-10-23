const mongoose = require('mongoose')
const password = 'mateasifra123'
const dbname = 'poruke-api'

const url = `mongodb+srv://oarwa-mk:${password}@cluster0.qihbb.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })


  const porukaSchema = new mongoose.Schema({
      sadrzaj: String, 
      datum : Date,
      vazno: Boolean
  })

  const Poruka = mongoose.model('Poruka', porukaSchema)

  const novaPoruka = new Poruka({
      sadrzaj: 'Mongoose poruka',
      datum: new Date(),
      vazno: true
  })

  /* Poruka.find({ vazno: true}).then( result =>{
      result.forEach( p => {
          console.log(p);
      })
      mongoose.connection.close()
  }) */

   novaPoruka.save().then( result => {
      console.log("Poruka spremljena");
      console.log(result);
      mongoose.connection.close()
  }) 