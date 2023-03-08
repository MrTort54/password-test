// fetch('./data.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     for(let el of data){
//       $('.wrap').append(`<div class='card'>
//      <div class='phoneName'> ${el.name}</div>
//      <img src='${el.pic}'>
//      <div style='background-color:${el.color}' class='phoneColor'></div>
//     <div class='row'> 
//     <div><i class="fa-solid fa-sack-dollar"></i> ${el.price}$</div>
//     <div><i class="fa-solid fa-sd-card"></i> ${el.memory}Gb</div>
//     </div>
//     <button id='code${el.id}'>Купити</button>
//       </div>`);
//     }

//     $('.wrap').click(function(e){
//      if(e.target.id){
//         for(let el of data){
//           let trg = (e.target.id).slice(4);
//           if(trg == el.id){
//             alert(el.count);
//           }
//         }
//       }
//     })

//   });