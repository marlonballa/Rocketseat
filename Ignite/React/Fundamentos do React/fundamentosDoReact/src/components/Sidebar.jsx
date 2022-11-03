import sidebarStyles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={sidebarStyles.sidebar}>
            <img 
                className={sidebarStyles.cover}
                src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80" 
                alt="Imagem de fundo escolhida pelo usuário" />
                <div className={sidebarStyles.profile}>
                    <strong>Marlon Balla</strong>
                    <span>Gerente Administrativo</span>                    
                </div>
                <footer>
                    <a href="#">Editar seu perfil</a>
                </footer>
        </aside>
    );
}