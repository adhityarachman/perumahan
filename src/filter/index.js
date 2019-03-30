import axios from 'axios'
export default (text) => {

   var bahasa = new axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190325T062957Z.7f5c4b1e2a89e472.6cbcf4053f20db97d6525348092ebb5a49cbf48e&lang=id&text='+text)
    .then((response)=>{
       
        
        console.log(response.data.text[0])
      return  response.data.text[0]
       
       
  })

  return bahasa
}
  