import { v } from "../styles/variables";
import {
    AiOutlineHome,
    AiOutlineSetting,
} from "react-icons/ai";

export const DesplegableUser = [
    {
        text: "Mi perfil",
        icono: <v.iconoUser />,
        tipo: "miperfil",
    },
    {
        text: "Configuracion",
        icono: <v.iconoSettings />,
        tipo: "configuracion",
    },
    {
        text: "Cerrar sesión",
        icono: <v.iconoCerrarSesion />,
        tipo: "cerrarsesion",
    },
];



// DATA SIDEBAR (menu horizontal)
export const LinksArray = [
    {
        label: "INICIO",
        icon: "noto-v1:house",
        to: "/",
    },
    {
        label: "VENDER",
        icon: "flat-color-icons:shop",
        to: "/pos",
    },
    {
        label: "KARDEX",
        icon: "flat-ui:box",
        to: "/kardex",
    },
    {
        label: "REPORTES",
        icon: "flat-ui:graph",
        to: "/reportes",
    },

];
export const SecondarylinksArray = [

    {
        label: "CONFIGURACION",
        icon: "icon-park:setting-two",
        to: "/configuracion",
        color: "#CE82FF"
    },



];
// TEMAS
export const TemasData = [
    {
        icono: "🌞",
        descripcion: "light",

    },
    {
        icono: "🌚",
        descripcion: "dark",

    },
];

// DATA CONFIGURACION
export const DataModulosConfiguracion = [
    {
        title: "PRODUCTOS",
        subtitle: "registra tus productos",
        icono: "https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
        link: "/configurar/productos",

    },
    {
        title: "USUARIOS",
        subtitle: "ten el control de tu personal",
        icono: "https://i.ibb.co/5vgZ0fX/hombre.png",
        link: "/configurar/usuarios",

    },

    {
        title: "EMPRESA",
        subtitle: "configura tus opciones básicas",
        icono: "https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
        link: "/configurar/empresa",

    },
    {
        title: "Categoria de productos",
        subtitle: "asigna categorias a tus productos",
        icono: "https://i.ibb.co/VYbMRLZ/categoria.png",
        link: "/configurar/categorias",

    },
    {
        title: "Marca de productos",
        subtitle: "gestiona tus marcas",
        icono: "https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
        link: "/configurar/marca",

    },

]
// USUARIOS
export const TipouserData = [
    {
        descripcion: "empleado",
        icono: "🪖",
    },
    {
        descripcion: "administrador",
        icono: "👑",
    },
];
// TIPO DOCUMENTO
export const TipoDocData = [
    {
        descripcion: "Dni",
        icono: "🪖",
    },
    {
        descripcion: "Libreta electoral",
        icono: "👑",
    },
    {
        descripcion: "Otros",
        icono: "👑",
    },
];