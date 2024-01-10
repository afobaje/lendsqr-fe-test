import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import styles from './../../styles/DashboardLayout.module.scss'
import SidebarContext from "@/Components/SidebarContext";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarContext>
        <div className={styles.cover}>
            <Header />
            <main className={styles.mainstyle}>
                <Sidebar />
                {children}
            </main>

        </div>
        </SidebarContext>
    )
}
