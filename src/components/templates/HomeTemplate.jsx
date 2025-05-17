import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContent";

export function HomeTemplate() {
    const { cerrarSesion } = useAuthStore();
    const { user } = UserAuth();
    return (<Container>
        <span>Hola</span>
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
        {/*
            SACAR INFORMACIÓN DEL USUARIO 
            <br />
            <span>{user.id}</span>
            <br />
            <span>{user.email}</span>
        */}
    </Container>);
}
const Container = styled.div`
    height: 100vh;
`;