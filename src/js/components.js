class ListItem{
    constructor(props){
        this.id=props.id;
        this.title=props.title;
        this.subtitle=props.subtitle;
        this.description=props.description;
        this.trailing=props.trailing;
    }
}
const jobs=[
    {
        id:1,
        title:'Desarrollador Junior',
        subtitle:'Grupo MRB',
        description:'Encargado del desarrollo de aplicaciones de servidor con nodeJs, tanto REST APIs como GraphQL APIs y aplicaciones móviles con Flutter. He implementado en proyectos de logística de entrega de pedidos a domicilio, tanto dashboards como aplicaciones móviles para el tracking de pilotos y sistemas de E-commerce con Open Commerce de Mailchimp.',
        trailing:'Noviembre 2019 - Actualidad'
    }
]
const education = [
    {
        id:1,
        title:'Colegio mixto san Agustín',
        subtitle:'Ciclo básico',
        description:'',
        trailing:'Enero 2014 - octubre 2016'
    },
    {
        id:2,
        title:'Instituto tecnológico de computación',
        subtitle:'Bachillerato en Computación con orientación científica',
        description:'',
        trailing:'Enero 2017 - Octubre 2019'
    },
    {
        id:3,
        title:'Universidad Mariano Gálvez de Guatemala',
        subtitle:'Ingeniería en Sistemas de la información',
        description:'Cursando cuarto semestre',
        trailing:'Enero 2020 - Actualidad'
    }
]
const ListTile = (value = new ListItem())=>{
    return `<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
    <div class="flex-grow-1">
        <h3 class="mb-0">${value.title}</h3>
        <div class="subheading mb-3">${value.subtitle}</div>
        <p>${value.description}</p>
    </div>
    <div class="flex-shrink-0"><span class="text-primary">${value.trailing}</span></div>
</div>`
}
document.getElementById("jobs").innerHTML=`
<div>
${jobs.map(ListTile).join("")}
</div>
`;
document.getElementById("educationList").innerHTML=`
<div>
${education.map(ListTile).join("")}
</div>
`