function sendContact(){
    name = document.getElementById('name').value;
    msg = document.getElementById('message').value;
    contact = document.getElementById('cnt').value;
    
    if(name&&msg&&contact){
        axios.defaults.headers.common['appID'] = 'kafilatest11567282175515'
        axios.post('/contact/save',{
            name:name,
            message:msg,
            phone:contact,

        })
        .then(res=>{
            console.log(res)
            document.getElementById('name').value="";
    document.getElementById('message').value="";
    document.getElementById('cnt').value="";
            // window.location.href='/kafila';
        })
        .catch(e=>{
            console.log(e)
        })
        

    }
    else{
        alert('Please  Enter Details Correctly')
    }
    
}



function getContact(){

            axios.defaults.headers.common['appID'] = 'KafilaV11567374237927'
            axios.get('/contact/getall')
            .then(res=>{
                console.log(res.data)
            
            })
            .catch(e=>{
                console.log(e)
            })

    
}


function getRegister(){

    axios.defaults.headers.common['appID'] = 'KafilaV11567374237927'
    axios.get('/register/getall')
    .then(res=>{
        console.log(res.data)
    
    })
    .catch(e=>{
        console.log(e)
    })


}

