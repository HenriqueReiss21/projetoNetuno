import Cliente from "../entities/Cliente"
import Funcionario from "../entities/Funcionario"
import Venda from "../entities/Venda"
import VendaDetalhada from "../entities/VendaDetalhada"

const db = {
    cliente: [
        new Cliente(1,'46251021000180','SAAE','08007722195','R. Bernardino de Campos, 799 - Centro','Indaiatuba','SP','13330-260',
        'ouvidoria@saae.sp.gov.br'),
    ],
    funcionario: [
        new Funcionario(1,'João Caires','12827391212','128367128','Rua da Fortuna, Centro','13348725','Indaituba','SP','08/09/2004',
        '18/10/2023',true,'Solteiro',0,0,'Desenvolvedor','Front-End','07:00 às 16:00',1200.60,'001-9','19247829','joao.caires@fatec.sp.gov.br'),
    ],
    venda: [
        new Venda(),
    ],
    vendaDetalhada: [
        new VendaDetalhada(),
    ]
}

export default db