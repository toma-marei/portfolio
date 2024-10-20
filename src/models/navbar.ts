export interface INavbar{
    id: number;
    title: string;
    destination: string;
}

export const navbarItems: INavbar[] = [
    { id: 1, title: 'About', destination: '#about' },
    { id: 3, title: 'Skills', destination: '#skills' },
    { id: 4, title: 'Projects', destination: '#projects' },
    { id: 5, title: 'Contact', destination: '#contact' },
]