const contact_url="https://68c503efa712aaca2b67a5ab.mockapi.io/contact";
const form=document.body.querySelector(".form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.body.querySelector(".name_input").value;
    const email=document.body.querySelector(".email_input").value;
    const message=document.body.querySelector(".message_input").value;
    const messageData={
        name:name,
        email:email,
        message:message
    }
    fetch(contact_url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(messageData)
    });
    document.body.querySelector(".name_input").value="";
    document.body.querySelector(".email_input").value="";
    document.body.querySelector(".message_input").value="";
})