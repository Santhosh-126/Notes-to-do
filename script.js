function opentodo(){
    document.getElementById("secondpage").style.display="block"

}

function opennote(){
    document.getElementById("thirdpage").style.display="block"

}


var input = document.getElementById("input")
    var ul=document.getElementById("item")
    function add(event){
        var listItem= document.createElement("li")
        listItem.innerHTML= input.value + " <input type='button'  id='del' onclick='del(event)'value ='Remove' >"+"<input id='tick' type='checkbox'>"
        ul.append(listItem)

        input.value=""
  
}

function del(event)
    {  

        event.target.parentElement.remove()
    }  

    // function tick(){
    //     document.getElementById("tick").style.backgroundColor="rgb(9, 216, 9)"
    // }





    function plus() {
        document.querySelector(".pop").style.display = "block";
    }

    function remove(event) {
        event.target.parentElement.remove();
    }

    function cancel(event) {
        event.preventDefault();
        document.querySelector(".pop").style.display = "none";
    }

    function join(event) {
        event.preventDefault();

        const container = document.querySelector(".container");
        const addname = document.getElementById("bname").value;
        const addauthor = document.getElementById("bauthor").value;
        const addpara = document.getElementById("bmessage").value;

        const div = document.createElement("div");
        div.setAttribute("class", "container1");
        div.innerHTML = `
            <h1>${addname}</h1>
            <h2>${addauthor}</h2>
            <p>${addpara}</p>
            <button class='btn'  onclick="remove(event)">Delete</button>
        `;

        container.insertBefore(div, document.getElementById("insert"));
        document.querySelector(".pop").style.display = "none";
    }
