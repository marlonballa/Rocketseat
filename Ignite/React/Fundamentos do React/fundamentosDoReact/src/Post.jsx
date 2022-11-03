//props: objeto que contém as propriedades do componente

export function Post(props) {
    return(
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>        
    )
}