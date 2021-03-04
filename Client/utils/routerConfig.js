import { Home, Dashboard, User, ErrorPage } from '../components/pagesComponents/index';
export default function ReaderRoute({menuKey}) {
    let Pages;
    switch (menuKey) {
        case 'home':
            Pages = Home;
            break;
        case 'dashboard':
            Pages = Dashboard;
            break;
        case 'user':
            Pages = User;
            break;
        default:
            Pages = ErrorPage
            break;
    }
    return(
        <>
            <Pages/>
        </>
    )
}

