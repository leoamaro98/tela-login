const ErroLogin = (props) => {
    return (
     <div className="container-erro" >
                <span>Usuário não encontrado, em 5 tentativas, haverá bloqueio. Verifique se o usuário {props.user} 
                realmente existe no ambiente {props.ambiente}.</span>
        </div>
    
    
    
     );
}
 
export default ErroLogin;