import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import styles from './../../styles/DashboardLayout.module.scss'
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.cover}>
            <Header />
            <main className={styles.mainstyle}>
                <Sidebar />
                {children}
            </main>

        </div>
    )
}
