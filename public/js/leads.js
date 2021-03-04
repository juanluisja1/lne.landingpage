
  //asycn fetch api call

function deleteLead(leadId) {
    
    //end point
    let endpoint = '/lead/'+ leadId + '/delete-json';
    //defining the header
    let h = new Headers;
    h.append ('Content-Type', 'application/json');
    h.append ('dataType', 'json');
    let req = new Request(endpoint,{
        method: 'POST',
        headers: h
    });

    //execute a request

    fetch(req)
    .then((res) => res.json())
    .then((data) =>{

        console.log('Response endpoint'+ data.msg);
        document.getElementById(leadId).remove();
    })
    .catch(console.warn);
}

