fetch('js/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(let el of data){
      if(el.price < 400){
        $('.data1').append(`<div class='card'>
      <div class='phoneName'> ${el.name}</div>
      <img src='${el.pic}'>
      <div style='background-color:${el.color}' class='phoneColor'></div>
      <div class='row'> 
      <div><i class="fa-solid fa-sack-dollar"></i> ${el.price}$</div>
      <div><i class="fa-solid fa-sd-card"></i> ${el.memory}Gb</div>
      </div>
      <button id='code${el.id}'>Купити</button>
      </div>`);
      
      }
      }
    }
  )

  fetch('js/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(let el of data){
      if(el.price < 800 ){
        $('.data2').append(`<div class='card'>
      <div class='phoneName'> ${el.name}</div>
      <img src='${el.pic}'>
      <div style='background-color:${el.color}' class='phoneColor'></div>
      <div class='row'> 
      <div><i class="fa-solid fa-sack-dollar"></i> ${el.price}$</div>
      <div><i class="fa-solid fa-sd-card"></i> ${el.memory}Gb</div>
      </div>
      <button id='code${el.id}'>Купити</button>
      </div>`);
      
      }
      }
    }
  )

  fetch('js/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(let el of data){
      if(el.action == "10%"){
        $('.data3').append(`<div class='card'>
      <div class='phoneName'> ${el.name}</div>
      <img src='${el.pic}'>
      <div style='background-color:${el.color}' class='phoneColor'></div>
      <div class='row'> 
      <div><i class="fa-solid fa-sack-dollar"></i> ${el.price}$</div>
      <div><i class="fa-solid fa-sd-card"></i> ${el.memory}Gb</div>
      </div>
      <button id='code${el.id}'>Купити</button>
      </div>`);
      
      }
      }
    }
  )

  fetch('js/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(let el of data){
      if(el.action == "20%"){
        $('.data4').append(`<div class='card'>
      <div class='phoneName'> ${el.name}</div>
      <img src='${el.pic}'>
      <div style='background-color:${el.color}' class='phoneColor'></div>
      <div class='row'> 
      <div><i class="fa-solid fa-sack-dollar"></i> ${el.price}$</div>
      <div><i class="fa-solid fa-sd-card"></i> ${el.memory}Gb</div>
      </div>
      <button id='code${el.id}'>Купити</button>
      </div>`);
      
      }
      }
    }
  )

  fetch('js/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(let el of data){
      if(el.count >30){
        $('.data5').append(`<div class='card'>
      <div class='phoneName'> ${el.name}</div>
      <img src='${el.pic}'>
      <div style='background-color:${el.color}' class='phoneColor'></div>
      <div class='row'> 
      <div><i class="fa-solid fa-sack-dollar"></i> ${el.price}$</div>
      <div><i class="fa-solid fa-sd-card"></i> ${el.memory}Gb</div>
      </div>
      <button id='code${el.id}'>Купити</button>
      </div>`);
      
      }
      }
    }
  )

  fetch('js/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(let el of data){
      if(el.name == "Iphone 14 PRO" , "Iphone 14"){
        $('.library').append(`<div class='card'>
      <div class='phoneName'> ${el.name}</div>
      <img src='${el.pic}'>
      <div style='background-color:${el.color}' class='phoneColor'></div>
      <div class='row'> 
      <div><i class="fa-solid fa-sack-dollar"></i> ${el.price}$</div>
      <div><i class="fa-solid fa-sd-card"></i> ${el.memory}Gb</div>
      </div>
      <button id='code${el.id}'>Купити</button>
      </div>`);
      
      }
      }
    }
  )


// fetch('js/data.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     for(let el of data){
//       $('.data1').append(`<div class='card'>
//       <div class='phoneName'> ${el.name}</div>
//       <img src='${el.pic}'>
//       <div style='background-color:${el.color}' class='phoneColor'></div>
//       <div class='row'> 
//       <div><i class="fa-solid fa-sack-dollar"></i> ${el.price}$</div>
//       <div><i class="fa-solid fa-sd-card"></i> ${el.memory}Gb</div>
//       </div>
//       <button id='code${el.id}'>Купити</button>
//       </div>`);
//       }
    

//     $('.data1').click(function(e){
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