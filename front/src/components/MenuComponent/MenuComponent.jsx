function MenuComponent(props) {
    return (
        <div className="MenuComponent">
            <div>
                <h1>Olá, {props.name}!</h1>
                <p>Que bom ter você aqui!</p>
            </div>

            <div>
                <button>
                    Ocultar Saldo
                </button>

                <div>
                    <p>Notificações</p>
                </div>

                <img src={props.avatar} alt="Avatar"/>
            </div>
        </div>
    );
}       
export default MenuComponent;