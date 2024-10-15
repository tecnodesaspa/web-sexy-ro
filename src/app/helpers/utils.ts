export const setErrorMessage = (error: any) => {
    console.log('error:',error);
    
    let msg = 'Ha ocurrido un problema al realizar operación, si el problema persiste contacte a administrador'
    if(error.error && error.error.message){
        const message = error.error.message
        switch(typeof message){
            case 'string':
                msg = message
                break;
            case 'object':
                msg = message[0]
                break;
        }
    }
    return msg
}