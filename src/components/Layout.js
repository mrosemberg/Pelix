import Header from './Header';

const Layout = props => (
    <div>
        <Header />
        <section className="content">
            {props.children}
        </section>
    </div>
);

export default Layout;