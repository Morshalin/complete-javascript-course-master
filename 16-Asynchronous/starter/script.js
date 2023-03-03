'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderCountry = (data, className="")=>{
    const html =`<article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(2)} Pepole</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
}

const renderError = (msg) => {
    countriesContainer.insertAdjacentText("beforeend", msg);
    //countriesContainer.style.opacity = 1;
} 

/* ==============================================

lecture 244
================================================*/
///////////////////////////////////////
//https://restcountries.com/v2/name/
/* function getCountryData(countryName){
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
    request.send();

    request.addEventListener('load',function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html =`<article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(2)} Pepole</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
    });
    
}
getCountryData("bangladesh"); */



/* ==============================================

lecture 246
================================================*/



/* function getCountryAndNeighbourData(countryName){
    //ajax request for country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
    request.send();

    request.addEventListener('load',function(){
        const [data] = JSON.parse(this.responseText);
        //country 1
        console.log(data);
        renderCountry(data);

        //ajax request for neighbour country 2
        const contryCode = data.borders[0];
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${contryCode}`);
        request2.send();

        request2.addEventListener('load',function(){
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, "neighbour");
        })

    });
    
}
getCountryAndNeighbourData("bangladesh"); */

/* =================================
            lecture 248
===================================== */

/* const getCountryData = (countryName)=>{
    fetch(`https://restcountries.com/v2/name/${countryName}`).then(response=>{
        if(!response.ok)
        throw new Error("country Not Found");

        return response.json()
    }).then((responseData)=>{
        const [data] = responseData;
        renderCountry(data);
        //contry 2
        //const contryCode = data.borders[0];
        const contryCode = "abcd";
        if(!contryCode) return;
        return fetch(`https://restcountries.com/v2/alpha/${contryCode}`)
    }).then(responseDataNeigboure=>{
        if(!responseDataNeigboure.ok)
        throw new Error("country Not Found");
        return responseDataNeigboure.json()
    }).then(data2=>renderCountry(data2, "neighbour"))
    .catch((err)=>{
        console.error(err);
        renderError(`Somethin went wrong,${err.message} , Try aging`);
    }).finally(()=>{
        countriesContainer.style.opacity = 1;
    });
}
 */

/* const getJson = (url, msg)=>{
    return fetch(url).then(response=>{
        if(!response.ok)
        throw new Error(msg);

        return response.json();
    })
}

const getCountryData = (countryName)=>{
    getJson(`https://restcountries.com/v2/name/${countryName}`,"country Not Found")
    .then((responseData)=>{
        const [data] = responseData;
        renderCountry(data);
        //contry 2
        const contryCode = data.borders?data.borders[0]:null;
        if(!contryCode) throw new Error("Do not have Neighbour");
        return getJson(`https://restcountries.com/v2/alpha/${contryCode}`,"Neighbour country Not Found")
    }).then(data2=>renderCountry(data2, "neighbour"))
    .catch((err)=>{
        console.error(err);
        renderError(`Somethin went wrong,${err.message} , Try aging`);
    }).finally(()=>{
        countriesContainer.style.opacity = 1;
    });
} */



//click to display country
/* btn.addEventListener("click", function(){
    countriesContainer.innerHTML="";
    getCountryData("bangladesh");
}); */

/* const whereAmI = (lat, lng)=>{
 fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(res=> res.json()).then((data)=>{
     return fetch(`https://restcountries.com/v2/name/${data.country}`);
 }).then((resCD)=> {
    if(!resCD.ok)
    throw new Error("country Not Found");
     return resCD.json();
    }).then((cData)=>{
    const [cGetData] = cData;
    renderCountry(cGetData);
 }).catch((err)=>{
     console.log(err);
 }).finally(()=>{
    countriesContainer.style.opacity = 1;
});
}

whereAmI(52.508, 13.381);
whereAmI(22.54929,88.36256);
whereAmI(24.38170, 88.60895); */



///promise
/* const lotryPromise = new Promise(function(resolve, reject){
    console.log("Lotter draw is happeing...");
    setTimeout(()=>{
        if(Math.random() >= 0.5){
            resolve("You are win lot of money");
        }else{
            reject(new Error("You are lost, lot of money"));
        }
    },3000);
});

lotryPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
});

Promise.resolve("abc").then((res)=>console.log(res));
Promise.reject(new Error("problem")).catch((err)=>console.error(err)); */

/* navigator.geolocation.getCurrentPosition(
    position=>console.log(position), 
    err=>console.error(err)
);
 */
const getPosition = ()=>{
    return new Promise((resolve, reject)=>{
        /* navigator.geolocation.getCurrentPosition(
            position=>resolve(position),
            err=>reject(err)
        ) */

        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

/* getPosition().then((res)=>{
    console.log(res);
});
 */
/* const whereAmI = ()=>{
    getPosition().then(({coords}=res)=>{
        const {latitude:lat, longitude:lng} = coords;
        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res=> res.json())
    .then((data)=>{
        return fetch(`https://restcountries.com/v2/name/${data.country}`);
    }).then((resCD)=> {
        if(!resCD.ok)
        throw new Error("country Not Found");
        return resCD.json();
        }).then((cData)=>{
        const [cGetData] = cData;
        renderCountry(cGetData);
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>{
        countriesContainer.style.opacity = 1;
    });
}

//click to display country
btn.addEventListener("click", whereAmI); */
/* 
const wait = (seconds)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,seconds*1000)
    });
}

const imgContainer = document.querySelector('.images');


const createImage = (imgPath)=>{
    return new Promise((resolve, reject)=>{
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load',function(){
            imgContainer.append(this);
            resolve(this);
        });

        img.addEventListener('error',function(){
            reject(new Error("Image not loaded"));
        });
    });
}
let currentImg;
createImage('img/img-1.jpg').then((img)=>{
    currentImg = img;
    console.log('Image loaded');
    return wait(2);
}).then(()=>{
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
}).then((img)=>{
    currentImg = img;
    console.log('Image loaded');
    return wait(2);
}).then(()=>{
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
}).catch((err)=>{
    console.log(err);
}); */

const whereAmI = async function(){
    try{
        const {coords} = await getPosition();
        const {latitude:lat, longitude:lng} = coords;

        const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        const geoData = await geoRes.json();
    
        const res = await fetch(`https://restcountries.com/v2/name/${geoData.country}`);
        const [data] = await res.json();
        renderCountry(data);
    } catch(err){
        console.log(err);
        renderError(`Something went wrong, ${err.message}. Try aging leater.`);
    }
    
}

whereAmI();
whereAmI();
whereAmI();
console.log("First");

