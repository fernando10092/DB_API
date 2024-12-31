const chamada = async (event: any)=>{
    event?.preventDefault();

    const formData = new FormData(event.currentTarget)

    const dados = {
        name: formData.get("nomehtml"),
        email: formData.get("emailhtml")
    }

    try{
        const response = await fetch("http://127.0.0.1:8000/api/",{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(dados)
        })

        if(response.ok){
            console.log("POST BEM SUCEDIDO!!!")
        }

    }catch(error){
        alert(error)
    }
}

export default chamada;