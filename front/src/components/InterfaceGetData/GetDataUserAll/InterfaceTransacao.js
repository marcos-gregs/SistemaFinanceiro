class GetClient{
    constructor(usuario_id, nome_cliente, email_cliente, avatar_url,telefone_cliente, endereco_cliente,notificacoes_cliente, tema, idioma_cliente){
        this.usuario_id = usuario_id;
        this.nome_cliente = nome_cliente;
        this.email_cliente = email_cliente;
        this.avatar_url = avatar_url;
        this.telefone_cliente = telefone_cliente;
        this.endereco_cliente =  endereco_cliente ;
        this.notificacoes_cliente = notificacoes_cliente ;
        this.tema = tema;
        this.idioma_cliente = idioma_cliente;
        
    }

    async getClientData() {
        try {
            const response = await fetch(`http://localhost:3000/api/client/${this.usuario_id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching client data:', error);
        }
    }
    async getClientDataOrcamento() {
        try {
            const response = await fetch(`http://localhost:3000/api/client/${this.usuario_id}/orcamento`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching client data:', error);
        }
    }
    async getClientDataMetas() {
        try {
            const response = await fetch(`http://localhost:3000/api/client/${this.usuario_id}/metas`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching client data:', error);
        }
    }
    async getClientDataConta() {
        try {
            const response = await fetch(`http://localhost:3000/api/client/${this.usuario_id}/conta`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching client data:', error);
        }
    }
    async getClientDataCartao() {
        try {
            const response = await fetch(`http://localhost:3000/api/client/${this.usuario_id}/cartao`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching client data:', error);
        }
    }
    async getClientDataTransacoes() {
        try {
            const response = await fetch(`http://localhost:3000/api/client/${this.usuario_id}/transacoes`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching client data:', error);
        }
    }
    async getClientDataInvestimentos() {
            try {
                const response = await fetch(`http://localhost:3000/api/client/${this.usuario_id}/investimentos`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching client data:', error);
            }
        }
    async getClientNotifications() {
        try {
            const response = await fetch(`http://localhost:3000/api/client/${this.usuario_id}/notifications`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching client notifications:', error);
        }      
    }

    
    
}

export default GetClient;